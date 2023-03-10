import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LoginForm } from "../../../../../services/iam/authentication/loginForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { LoginProps } from "./interface";

export const Login: FC<LoginProps> = ({ redirectToOnLogin = "/Home" }) => {
    return (
        <View>
            <Text style={styles.title}>
                {i18n.t("loginCreateAccountTitle")}
            </Text>
            <LoginForm redirectToOnLogin={redirectToOnLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: "bold",
    },
});
