import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RegisterForm } from "../../../../../services/iam/authentication/registerForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

export const Register: FC = () => {
    return (
        <View>
            <Text style={styles.title}>
                {i18n.t("registerCreateAccountTitle")}
            </Text>
            <RegisterForm />
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
