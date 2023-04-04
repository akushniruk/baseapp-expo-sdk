import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { Warning } from "../../../../assets/system/warning";
import { Button } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { CopyField } from "../../../../shared/ui/copyField";
import { apiKeysCreateModalStyles } from "./apiKeysCreateModal.style";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useAppSelector } from "../../../../shared/providers/redux/lib/useAppSelector";
import { ApiKey } from "../../api/types";

export const ApiKeysCreateModal: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysCreateModalStyles(theme), [theme]);

    const apiKeyList: ApiKey[] | null = useAppSelector(
        (state: RootState) => state.apiKey.list
    );

    const newApiKey: ApiKey | null = apiKeyList?.length
        ? apiKeyList[apiKeyList.length - 1]
        : null;

    return (
        <View>
            <Text style={styles.title}>NOTE</Text>
            <Text style={styles.subtitle}>
                To avoid asset loss, please do not tell your Secret Key and
                Private Key to others. If you forget your Secret Key, please
                delete it and apply for a new Secret Kay pair.
            </Text>
            <View style={styles.copyFieldContainer}>
                <CopyField title="Access key" value={newApiKey?.kid || ""} />
            </View>

            <CopyField title="Secret key" value={newApiKey?.secret || ""} />
            <View style={styles.container}>
                <View style={styles.warningIcon}>
                    <Warning />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>SECRET KEY</Text>
                    <Text style={styles.subtitle}>
                        This information will be shown only once and can not be
                        retrieved once lost. Please store it properly.
                    </Text>
                </View>
            </View>
            <Button title="Close" isLoading={false} />
        </View>
    );
};
