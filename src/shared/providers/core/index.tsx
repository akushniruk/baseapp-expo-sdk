import React from "react";
import { UserProvider } from "../../../services/user";
import { Alerts } from "../../ui/alerts";
import { ConfigProvider } from "../config";
import { ReduxProvider } from "../redux/redux";
import { ThemeProvider } from "../theme";
import WebSocketProvider from "../websocket";
import { DismissKeyboard } from "../../ui/dismissKeyboard";

export const CoreProvider: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <ConfigProvider>
                    <WebSocketProvider>
                        <UserProvider>
                            <DismissKeyboard>
                                <ThemeProvider>
                                    {children}
                                    <Alerts />
                                </ThemeProvider>
                            </DismissKeyboard>
                        </UserProvider>
                    </WebSocketProvider>
                </ConfigProvider>
            </ReduxProvider>
        </>
    );
};
