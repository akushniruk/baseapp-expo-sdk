import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { VerifyEmailForm } from "../../../../../services/iam/authentication/verifyEmailForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

export const VerifyEmail: FC = () => {
    return (
        <View>
            <Text style={styles.title}>{i18n.t("VerifyEmailTitle")}</Text>
            <VerifyEmailForm />
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
