import React from "react";
import { UserProvider } from "../../../services/user";
import { ReduxProvider } from "../redux/redux";

export const CoreProvider: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <UserProvider>{children}</UserProvider>
            </ReduxProvider>
        </>
    );
};
