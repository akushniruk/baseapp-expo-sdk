import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ForgotPasswordForm } from "../../../../../services/iam/authentication/forgotPasswordForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

export const ForgotPassword: FC = () => {
    return (
        <View>
            <Text style={styles.title}>{i18n.t("forgotPasswordTitle")}</Text>
            <ForgotPasswordForm />
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
