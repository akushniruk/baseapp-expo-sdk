import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import LoginForm from "../../../../../services/iam/authentication/loginForm/ui/loginForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

const Login: FC = () => {
    return (
        <View>
            <Text style={styles.title}>
                {i18n.t("loginCreateAccountTitle")}
            </Text>
            <LoginForm />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: "bold",
    },
});