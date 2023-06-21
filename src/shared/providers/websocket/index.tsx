import React, { createContext, useEffect, useState } from "react";
import { Market } from "../../../services/markets/model/type";
import { saveOrderbookSnapshot, updateOrderbook } from "../../../services/orderbook/model/orderbookSlice";
import { saveTickers } from "../../../services/tickers/model/tickersSlice";
import { updateTrades } from "../../../services/trades/model/tradesSlice";
import { useAppDispatch, useAppSelector } from "../redux";
import { RootState, store } from "../redux/model/store";
import { setWalletAddress, updateWalletBalance } from "../../../services/wallets/model/walletSlice";
import { generateSocketURI, getStreams } from "./helpers";
import { User } from "../../../services/user";
import { updateAccountsBalance } from "../../../services/wallets/model/accountsSlice";

const WebSocketContext = createContext(null);

const WebSocketProvider: React.FC<{ children?: any }> = ({ children }) => {
    const dispatch = useAppDispatch();

    const [ws, setWs] = useState<any>(null);
    const [socketUrl, setSocketUrl] = useState<string | null>(null);
    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);
    const selectedMarket: Market | undefined = useAppSelector((state: RootState) => state.markets.currentMarket);

    useEffect(() => {
        const userLoggedIn = !!profile?.uid;
        if (!socketUrl || profile) {
            const streams = getStreams(userLoggedIn, selectedMarket);

            if (streams.length) {
                setSocketUrl(generateSocketURI(userLoggedIn, streams));
            }
        }
    }, [profile, selectedMarket, socketUrl]);

    const handleOnMessage = (message: any) => {
        const currentMarket: Market | undefined = store.getState().markets.currentMarket;
        const previousSequence = store.getState().orderbook.sequence;

        const payload = JSON.parse(message.data);

        if (!payload) {
            return;
        }

        for (const routingKey in payload) {
            if (payload.hasOwnProperty(routingKey)) {
                const orderBookMatchSnap = routingKey.match(/([^.]*)\.ob-snap/);
                const orderBookMatchInc = routingKey.match(/([^.]*)\.ob-inc/);
                const tradesMatch = String(routingKey).match(/([^.]*)\.trades/);

                // public - orderbook snapshot
                if (orderBookMatchSnap) {
                    if (orderBookMatchSnap[1] === currentMarket?.id) {
                        dispatch(saveOrderbookSnapshot(payload[routingKey]));
                    }

                    return;
                }

                // public - orderbook inc update
                if (orderBookMatchInc) {
                    if (orderBookMatchInc[1] === currentMarket?.id) {
                        if (previousSequence === null) {
                            console.log("OrderBook increment received before snapshot");

                            return;
                        }
                        if (previousSequence + 1 !== payload[routingKey].sequence) {
                            console.log(
                                `Bad sequence detected in incremental orderbook previous: ${previousSequence}, event: ${payload.sequence}`
                            );

                            return;
                        }
                        dispatch(updateOrderbook(payload[routingKey]));
                    }

                    return;
                }

                // public - trades
                if (tradesMatch) {
                    dispatch(
                        updateTrades({
                            trades: payload[routingKey]?.trades,
                            market: tradesMatch[1],
                        })
                    );

                    return;
                }

                switch (routingKey) {
                    case "global.tickers":
                        dispatch(saveTickers(payload["global.tickers"]));

                        return;
                    case "balances":
                        dispatch(updateAccountsBalance(payload[routingKey]));
                        dispatch(updateWalletBalance(payload[routingKey]));

                        return;

                    // private
                    case "deposit_address":
                        console.log("address", payload[routingKey]);
                        dispatch(setWalletAddress(payload[routingKey]));

                        return;
                    default:
                        console.log(`Unhandled websocket channel: ${routingKey}`);
                        return;
                }
            }
        }
    };

    useEffect(() => {
        if (socketUrl) {
            const newWs = new WebSocket(socketUrl);

            newWs.onopen = () => {
                setWs(newWs);
            };

            newWs.onclose = () => {
                setWs(null);
            };

            newWs.onerror = (error) => {
                // console.log(`WebSocket error: ${error}`);
            };

            newWs.onmessage = (message) => {
                // console.log(`Received message: ${message.data}`);
                handleOnMessage(message);
            };

            return () => {
                if (newWs.readyState === WebSocket.OPEN) {
                    newWs.close();
                }
            };
        }
    }, [socketUrl]);

    return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
};

export default WebSocketProvider;
export { WebSocketContext };
