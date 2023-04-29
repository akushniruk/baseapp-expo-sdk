import React, { createContext, useEffect, useState } from "react";
import { saveTickers } from "../../../services/tickers/model/tickersSlice";
import { useAppDispatch } from "../redux";

const WebSocketContext = createContext(null);

const WebSocketProvider: React.FC<{ children?: any }> = ({ children }) => {
    const [ws, setWs] = useState<any>(null);
    const dispatch = useAppDispatch();

    // TODO: define type for message
    const handleOnMessage = (message: any) => {
        const payload = JSON.parse(message.data);

        if (!payload) {
            return;
        }

        for (const routingKey in payload) {
            if (payload.hasOwnProperty(routingKey)) {
                switch (routingKey) {
                    case "global.tickers":
                        dispatch(saveTickers(payload["global.tickers"]));

                        return;
                    default:
                        console.log(
                            `Unhandled websocket channel: ${routingKey}`
                        );
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

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocketProvider;
export { WebSocketContext };
