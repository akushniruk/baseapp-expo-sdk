import React from "react";
import { UserProvider } from "../../../services/user";
import { Alerts } from "../../ui/alerts";
import { ReduxProvider } from "../redux/redux";
import { ThemeProvider } from "../theme";

export const CoreProvider: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <UserProvider>
                    <ThemeProvider>
                        {children}
                        <Alerts />
                    </ThemeProvider>
                </UserProvider>
            </ReduxProvider>
        </>
    );
};
