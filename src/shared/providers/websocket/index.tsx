import React, { createContext, useEffect, useState } from "react";
import { useAppSelector } from "../../../../lib/commonjs/shared/providers/redux";
import { Market } from "../../../services/markets/model/type";
import { saveOrderbookSnapshot, updateOrderbook } from "../../../services/orderbook/model/orderbookSlice";
import { saveTickers } from "../../../services/tickers/model/tickersSlice";
import { useAppDispatch } from "../redux";
import { RootState } from "../redux/model/store";

const WebSocketContext = createContext(null);

const WebSocketProvider: React.FC<{ children?: any }> = ({ children }) => {
    const [ws, setWs] = useState<any>(null);
    const dispatch = useAppDispatch();
    const currentMarket: Market | undefined = useAppSelector((state: RootState) => state.markets.currentMarket);
    const previousSequence = useAppSelector((state: RootState) => state.orderbook.sequence);

    // TODO: define type for message
    const handleOnMessage = (message: any) => {
        const payload = JSON.parse(message.data);

        if (!payload) {
            return;
        }

        for (const routingKey in payload) {
            if (payload.hasOwnProperty(routingKey)) {
                const orderBookMatch = routingKey.match(/([^.]*)\.update/);
                const orderBookMatchSnap = routingKey.match(/([^.]*)\.ob-snap/);
                const orderBookMatchInc = routingKey.match(/([^.]*)\.ob-inc/);

                // public
                if (orderBookMatch) {
                    if (orderBookMatch[1] === currentMarket?.id) {
                        dispatch(saveOrderbookSnapshot(payload[routingKey]));
                    }

                    return;
                }

                // public
                if (orderBookMatchSnap) {
                    if (orderBookMatchSnap[1] === currentMarket?.id) {
                        dispatch(saveOrderbookSnapshot(payload[routingKey]));
                    }

                    return;
                }

                // public
                if (orderBookMatchInc) {
                    if (orderBookMatchInc[1] === currentMarket?.id) {
                        // FIXME: handle prev sequence
                        // if (previousSequence === null) {
                        //     window.console.log("OrderBook increment received before snapshot");

                        //     return;
                        // }
                        // if (previousSequence + 1 !== payload.sequence) {
                        //     window.console.log(
                        //         `Bad sequence detected in incremental orderbook previous: ${previousSequence}, event: ${payload.sequence}`
                        //     );

                        //     return;
                        // }
                        dispatch(updateOrderbook(payload[routingKey]));
                    }

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
                process.env.REACT_APP_WS_API || "ws://192.168.0.101:9003"
            }/api/v2/ranger/public?stream=btczar.ob-inc&stream=btczar.trades&stream=global.tickers`
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
