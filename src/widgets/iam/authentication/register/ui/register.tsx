import React, { FC, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RegisterForm } from "../../../../../services/iam/authentication/registerForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { registerStyles } from "./register.styles";
import { Link } from "@react-navigation/native";
import { DismissKeyboard } from "../../../../../shared/ui/dismissKeyboard";

export const Register: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => registerStyles(theme), [theme]);

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.registerFormContainer}>
                    <Text style={styles.title}>{i18n.t("registerCreateAccountTitle")}</Text>
                    <RegisterForm />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomContainerText}>{i18n.t("registerAlreadyHaveAnAccount")}</Text>
                    <Link style={styles.bottomContainerLink} to={{ screen: "Login" }}>
                        {i18n.t("registerBackToLogin")}
                    </Link>
                </View>
            </View>
        </DismissKeyboard>
    );
};
