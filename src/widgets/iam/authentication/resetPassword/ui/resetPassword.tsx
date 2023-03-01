import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ResetPasswordForm } from "../../../../../services/iam/authentication/resetPasswordForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

export const ResetPassword: FC = () => {
    return (
        <View>
            <Text style={styles.title}>{i18n.t("resetPasswordTitle")}</Text>
            <ResetPasswordForm />
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
