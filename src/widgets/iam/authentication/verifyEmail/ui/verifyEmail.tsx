import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import VerifyEmailForm from "../../../../../services/iam/authentication/verifyEmailForm/ui/verifyEmailForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

const VerifyEmail: FC = () => {
    return (
        <View>
            <Text style={styles.title}>{i18n.t("VerifyEmailTitle")}</Text>
            <VerifyEmailForm />
        </View>
    );
};

export default VerifyEmail;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: "bold",
    },
});
