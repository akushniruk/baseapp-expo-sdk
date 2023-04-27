import React from "react";
import { UserProvider } from "../../../services/user";
import { Alerts } from "../../ui/alerts";
import { ConfigProvider } from "../config";
import { ReduxProvider } from "../redux/redux";
import { ThemeProvider } from "../theme";
import WebSocketProvider from "../websocket";

export const CoreProvider: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <ConfigProvider>
                    <WebSocketProvider>
                        <UserProvider>
                            <ThemeProvider>
                                {children}
                                <Alerts />
                            </ThemeProvider>
                        </UserProvider>
                    </WebSocketProvider>
                </ConfigProvider>
            </ReduxProvider>
        </>
    );
};
