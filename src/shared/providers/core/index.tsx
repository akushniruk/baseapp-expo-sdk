import React from "react";
import { UserProvider } from "../../../services/user";
import { Alerts } from "../../ui/alerts";
import { ReduxProvider } from "../redux/redux";

export const CoreProvider: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <UserProvider>
                    {children}
                    <Alerts />
                </UserProvider>
            </ReduxProvider>
        </>
    );
};
