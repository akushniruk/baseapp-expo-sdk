import React from "react";
import { useUserMeQuery } from "../api/user";

export const UserProvider: React.FC<{ children?: any }> = ({ children }) => {
    useUserMeQuery();

    return <>{children}</>;
};
