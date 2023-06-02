import React, { FC, useEffect, useCallback, useMemo } from "react";
import { View, Switch, Text, Platform, Pressable } from "react-native";
import { apiKeysTableStyles } from "./apiKeysTable.styles";
import { Button, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { ApiKey } from "../../api/types";
import { NoDataIcon } from "../../../../assets/system/noDataIcon";
import { useGetApiKeyListMutation } from "../../api/apiKeyApi";
import { ApiKeysTableProps } from "./interface";
import { CancelIcon } from "../../../../assets/system/cancel";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";

const DEFAULT_LIMIT = 10;

export const ApiKeysTable: FC<ApiKeysTableProps> = ({
    createRequest,
    updateRequest,
    deleteRequest,
}: ApiKeysTableProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysTableStyles(theme), [theme]);

    const [getApiKeyList] = useGetApiKeyListMutation();

    const apiKeyList: ApiKey[] | null = useAppSelector((state: RootState) => state.apiKey.list);

    useEffect(() => {
        getApiKeyList({ page: 1, limit: DEFAULT_LIMIT });
    }, []);

    const handleCreateRequest = useCallback(() => {
        createRequest();
    }, []);

    const handleUpdateRequest = useCallback((kid: string, state: "active" | "disabled") => {
        updateRequest(kid, state);
    }, []);

    const handleDeleteRequest = useCallback((kid: string) => {
        deleteRequest(kid);
    }, []);

    const renderTableBlockHead = useCallback(
        (title: string, value: string, bold?: boolean, statusColor?: boolean) => {
            const statusColorStyle = statusColor
                ? value === "active" || value === "Active"
                    ? styles.activeColor
                    : styles.inactiveColor
                : {};

            const valueBoldStyle = bold ? [styles.value, styles.bold] : styles.value;

            const statusStyle = statusColor ? [styles.value, statusColorStyle] : styles.value;

            return (
                <View style={styles.rowItem}>
                    <Text style={bold ? valueBoldStyle : statusColorStyle}>{value}</Text>
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
                        <Switch
                            onValueChange={() => handleUpdateRequest(apiKey.kid, apiKey.state)}
                            value={isEnabled}
                            ios_backgroundColor="#e3e3de"
                            trackColor={{
                                false: styles.switchInactive.backgroundColor,
                                true: styles.switchEnabled.backgroundColor,
                            }}
                            thumbColor={isEnabled ? styles.switchEnabled.color : styles.switchInactive.color}
                            {...Platform.select({
                                web: {
                                    activeThumbColor: styles.switchEnabled.color,
                                },
                            })}
                        />
                    </View>
                    <View style={styles.row}>
                        {renderTableBlockHead(i18n.t("apiKeysTableAlgorithm"), apiKey.algorithm)}
                        {renderTableBlockHead(i18n.t("apiKeysTableState"), apiKey.state, false, true)}
                        <Pressable style={styles.cancelIcon} onPress={() => handleDeleteRequest(apiKey.kid)}>
                            <CancelIcon />
                        </Pressable>
                    </View>
                    <View style={styles.row}>
                        {renderTableBlockHead(i18n.t("apiKeysTableCreated"), apiKey.created_at)}
                        {renderTableBlockHead(i18n.t("apiKeysTableUpdated"), apiKey.updated_at)}
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
            <View style={styles.noData}>
                <NoDataIcon />
                <Text style={styles.noDataText}>Add your first API key</Text>
                <Button onPress={handleCreateRequest} title={i18n.t("apiKeysTableCreateButton")} isLoading={false} />
            </View>
        );
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.createButton}>
                <Button onPress={handleCreateRequest} title={i18n.t("apiKeysTableCreateButton")} isLoading={false} />
            </View>

            {apiKeyList?.map(renderTableBlock)}
        </View>
    );
};
