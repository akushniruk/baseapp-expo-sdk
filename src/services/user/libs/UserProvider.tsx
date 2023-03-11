import React from "react";
import { useUserMeQuery } from "../api/user";

export const UserProvider: React.FC<{ children?: any }> = ({ children }) => {
    const { data } = useUserMeQuery();
    console.log("User ME", data);

    return <>{children}</>;
};
