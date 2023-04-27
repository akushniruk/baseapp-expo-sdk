import React from "react";
import { useConfigQuery } from "../../../services/configs/api/config";

export const ConfigProvider: React.FC<{ children?: any }> = ({ children }) => {
    useConfigQuery();

    return <>{children}</>;
};
