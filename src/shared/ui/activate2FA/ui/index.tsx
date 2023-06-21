import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { Button } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { activate2FAStyles } from "./activate2FA.styles";
import i18n from "../../../../shared/libs/i18n/supportedLanguages";

export const Activate2FA: FC = () => {
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = useMemo(() => activate2FAStyles(theme), [theme]);

    const handleRedirectToActivate = useCallback(() => {
        process.env.REACT_APP_MODE !== "storybook" && linkTo("/Activate2FA");
    }, []);

    return (
        <View>
            <Text style={styles.title}>{i18n.t("activate2FATitle")}</Text>
            <Text style={styles.subtitle}>
                {i18n.t("activate2FASubTitle")}
                <Text style={styles.bold}>{i18n.t("activate2FASubTitle2")}</Text>
                {i18n.t("activate2FASubTitle3")}
                <Text style={styles.bold}>{i18n.t("activate2FASubTitle4")}</Text>
                {i18n.t("activate2FASubTitle5")}
            </Text>
            <Button onPress={handleRedirectToActivate} title={i18n.t("activate2FAButton")} isLoading={false} />
        </View>
    );
};
