import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import RegisterForm from "../../../../../services/iam/authentication/registerForm/ui/registerForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";

const Register: FC = () => {
    return (
        <View>
            <Text style={styles.title}>
                {i18n.t("registerCreateAccountTitle")}
            </Text>
            <RegisterForm />
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: "bold",
    },
});
