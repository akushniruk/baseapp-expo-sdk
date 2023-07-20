import React from "react";
import { useConfigQuery } from "../../../services/configs/api/config";
import { useMemberLevelsQuery } from "../../../services/user/api/memberLevels";

export const ConfigProvider: React.FC<{ children?: any }> = ({ children }) => {
    useConfigQuery();
    useMemberLevelsQuery();

    return <>{children}</>;
};
