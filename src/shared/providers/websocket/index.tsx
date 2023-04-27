import React, { createContext, useEffect, useState } from "react";

const WebSocketContext = createContext(null);

const WebSocketProvider: React.FC<{ children?: any }> = ({ children }) => {
    const [ws, setWs] = useState<any>(null);

    useEffect(() => {
        // TODO: add support for private
        const newWs = new WebSocket(
            `ws://${
                process.env.REACT_APP_WS_API || "192.168.0.101:9003"
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
