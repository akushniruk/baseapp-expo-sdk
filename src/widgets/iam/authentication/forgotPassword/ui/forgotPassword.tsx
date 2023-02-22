import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import ForgotPasswordForm from "../../../../../services/iam/authentication/forgotPasswordForm/ui/forgotPasswordForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

const ForgotPassword: FC = () => {
    return (
        <View>
            <Text style={styles.title}>{i18n.t("forgotPasswordTitle")}</Text>
            <ForgotPasswordForm />
        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: "bold",
    },
});
