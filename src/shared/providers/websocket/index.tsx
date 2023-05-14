import React, { createContext, useEffect, useState } from "react";
import { Market } from "../../../services/markets/model/type";
import { saveOrderbookSnapshot, updateOrderbook } from "../../../services/orderbook/model/orderbookSlice";
import { saveTickers } from "../../../services/tickers/model/tickersSlice";
import { updateTrades } from "../../../services/trades/model/tradesSlice";
import { useAppDispatch } from "../redux";
import { store } from "../redux/model/store";

const WebSocketContext = createContext(null);

const WebSocketProvider: React.FC<{ children?: any }> = ({ children }) => {
    const [ws, setWs] = useState<any>(null);
    const dispatch = useAppDispatch();
    // TODO: define type for message
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
                    default:
                        console.log(`Unhandled websocket channel: ${routingKey}`);
                        return;
                }
            }
        }
    };

    useEffect(() => {
        // TODO: add support for private
        const newWs = new WebSocket(
            `${
                process.env.REACT_APP_WS_API || "wss://aurora-master.uat.opendax.app"
            }/api/v2/ranger/public?stream=global.tickers`
        );

        newWs.onopen = () => {
            console.log("WebSocket connection opened");
            setWs(newWs);
        };

        newWs.onclose = () => {
            console.log("WebSocket connection closed");
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
    }, []);

    return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
};

export default WebSocketProvider;
export { WebSocketContext };
