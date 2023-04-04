import React, { FC, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { apiKeysTableStyles } from "./apiKeysTable.styles";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { ApiKey } from "../../api/types";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { useGetApiKeyListMutation } from "../../api/apiKeyApi";

const DEFAULT_LIMIT = 10;

export const ApiKeysTable: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysTableStyles(theme), [theme]);

    const [getApiKeyList] = useGetApiKeyListMutation();

    const apiKeyList: ApiKey[] | null = useAppSelector(
        (state: RootState) => state.apiKey.list
    );

    useEffect(() => {
        getApiKeyList({ page: 1, limit: DEFAULT_LIMIT });
    }, []);

    if (!apiKeyList || apiKeyList.length === 0) {
        return (
            <View>
                <NoDataIcon />
                <Text>Add your first API key</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>ApiKeysTable</Text>
            {JSON.stringify(apiKeyList)}
        </View>
    );
};
