import React, { FC, useEffect, useCallback, useMemo } from "react";
import {
    View,
    ScrollView,
    Switch,
    Text,
    Platform,
    Pressable,
} from "react-native";
import { apiKeysTableStyles } from "./apiKeysTable.styles";
import { Button, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { ApiKey } from "../../api/types";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { useGetApiKeyListMutation } from "../../api/apiKeyApi";
import { ApiKeysTableProps } from "./interface";
import { CancelIcon } from "../../../../assets/system/cancel";

const DEFAULT_LIMIT = 10;

export const ApiKeysTable: FC<ApiKeysTableProps> = ({
    createRequest,
    updateRequest,
    deleteRequest,
}: ApiKeysTableProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysTableStyles(theme), [theme]);

    const [getApiKeyList] = useGetApiKeyListMutation();

    const apiKeyList: ApiKey[] | null = useAppSelector(
        (state: RootState) => state.apiKey.list
    );

    useEffect(() => {
        getApiKeyList({ page: 1, limit: DEFAULT_LIMIT });
    }, []);

    const handleCreateRequest = useCallback(() => {
        // Will open ApiKeys2FAModal inside widget
        createRequest(true);
    }, []);

    const handleUpdateRequest = useCallback((kid: string, state: string) => {
        // Will open ApiKeys2FAModal inside widget
        updateRequest(kid, state, true);
    }, []);

    const handleDeleteRequest = useCallback((kid: string) => {
        // Will open ApiKeys2FAModal inside widget
        deleteRequest(kid, true);
    }, []);

    const renderTableBlockHead = useCallback(
        (
            title: string,
            value: string,
            bold?: boolean,
            statusColor?: boolean
        ) => {
            const statusColorStyle = statusColor
                ? value === "active" || value === "Active"
                    ? styles.activeColor
                    : styles.inactiveColor
                : {};

            const valueBoldStyle = bold
                ? [styles.value, styles.bold]
                : styles.value;

            const statusStyle = statusColor
                ? [styles.value, statusColorStyle]
                : styles.value;

            return (
                <View style={styles.rowItem}>
                    <Text style={bold ? valueBoldStyle : statusColorStyle}>
                        {value}
                    </Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        },
        [apiKeyList]
    );

    const renderTableBlock = useCallback(
        (apiKey: ApiKey) => {
            const isEnabled = apiKey.state === "active";

            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        {renderTableBlockHead("kid", apiKey.kid, true)}
                        <Pressable
                            onPress={() =>
                                handleUpdateRequest(apiKey.kid, apiKey.state)
                            }
                        >
                            <Switch
                                value={isEnabled}
                                ios_backgroundColor="#e3e3de"
                                trackColor={{
                                    false: styles.switchInactive
                                        .backgroundColor,
                                    true: styles.switchEnabled.backgroundColor,
                                }}
                                thumbColor={
                                    isEnabled
                                        ? styles.switchEnabled.color
                                        : styles.switchInactive.color
                                }
                                {...Platform.select({
                                    web: {
                                        activeThumbColor:
                                            styles.switchEnabled.color,
                                    },
                                })}
                            />
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        {renderTableBlockHead("Algorithm", apiKey.algorithm)}
                        {renderTableBlockHead(
                            "State",
                            apiKey.state,
                            false,
                            true
                        )}
                        <Pressable
                            style={styles.cancelIcon}
                            onPress={() => handleDeleteRequest(apiKey.kid)}
                        >
                            <CancelIcon />
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        {renderTableBlockHead("Created", apiKey.created_at)}
                        {renderTableBlockHead("Updated", apiKey.updated_at)}
                        <View style={[styles.hide, styles.cancelIcon]}>
                            <CancelIcon />
                        </View>
                    </View>
                </View>
            );
        },
        [apiKeyList, updateRequest]
    );

    if (!apiKeyList || apiKeyList.length === 0) {
        return (
            <View>
                <NoDataIcon />
                <Text>Add your first API key</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ width: "40%" }}>
                <Button
                    onPress={handleCreateRequest}
                    title="Create +"
                    isLoading={false}
                />
            </View>

            {apiKeyList?.map(renderTableBlock)}
        </ScrollView>
    );
};
