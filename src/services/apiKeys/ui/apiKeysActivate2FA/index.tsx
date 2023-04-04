import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../../shared";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { apiKeysActivate2FAStyles } from "./apiKeysActivate2FA.styles";

export const ApiKeysActivate2FA: FC = () => {
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => apiKeysActivate2FAStyles(theme), [theme]);

    const handleRedirectToActivate = useCallback(() => {
        process.env.REACT_APP_MODE !== "storybook" && linkTo("/Activate2FA");
    }, []);

    return (
        <View>
            <Text style={styles.title}>
                2-Step Verification is required for API Keys
            </Text>
            <Text style={styles.subtitle}>
                2FA, is a substantial layer of additional security that is
                collectively known as “multi factor authentication”. It’s
                necessary when you{" "}
                <Text style={styles.bold}>withdraw your funds</Text>. Also with
                2FA you’re able to <Text style={styles.bold}>trade</Text> with
                big amount
            </Text>
            <Button
                onPress={handleRedirectToActivate}
                title="Activate"
                isLoading={false}
            />
        </View>
    );
};
