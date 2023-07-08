import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { ForgotPasswordForm } from "../../../../../services/iam/authentication/forgotPasswordForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { forgotPasswordStyles } from "./forgotPassword.styles";

export const ForgotPassword: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => forgotPasswordStyles(theme), [theme]);

    return (
        <View style={styles.container}>
            <View style={styles.registerFormContainer}>
                <Text style={styles.title}>{i18n.t("forgotPasswordTitle")}</Text>
                <ForgotPasswordForm />
            </View>
        </View>
    );
};
