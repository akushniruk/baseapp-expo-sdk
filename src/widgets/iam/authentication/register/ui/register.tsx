import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import RegisterForm from "../../../../../services/iam/authentication/registerForm/ui/registerForm";

const Register: FC = () => {
    return (
        <View>
            <Text style={styles.title}>Create a new account</Text>
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
