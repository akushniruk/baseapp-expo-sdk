import React, { FC, useCallback } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import {
    ResendVerificationCodeType,
    useResendVerificationCodeMutation,
} from "../api/verifyEmailFormApi";

export const VerifyEmailForm: FC = () => {
    const [resendVerificationCode] = useResendVerificationCodeMutation();

    const onPress = useCallback(() => {
        const resendVerificationData: ResendVerificationCodeType = {
            email: "changeme",
            captcha_response: "changeme",
        };

        resendVerificationCode(resendVerificationData);
    }, []);

    return (
        <View style={styles.verifyEmailForm}>
            <Text style={styles.infoText}>
                To complete registration, check for an email in your inbox with
                further instruction. If you cannot find the email, please check
                your spam folder
            </Text>
            <Pressable style={styles.resendConfirmWrapper} onPress={onPress}>
                <Text style={styles.resendConfirmButton}>
                    Resend confirmation
                </Text>
            </Pressable>
            <View style={styles.backToLoginLinkWrapper}>
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    {i18n.t("forgotPasswordFormBackToLoginButton")}
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    verifyEmailForm: {
        maxWidth: 456,
    },
    infoText: {
        maxWidth: 456,
        color: Palette["text-color"][70].value,
    },
    resendConfirmWrapper: {
        marginTop: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    resendConfirmButton: {
        color: Palette["text-color"][100].value,
        textDecorationLine: "underline",
    },
    backToLoginLinkWrapper: {
        display: "flex",
        alignItems: "center",
    },
    backToLoginLink: {
        marginTop: 16,
        fontWeight: "bold",
        color: Palette["text-color"][100].value,
    },
});
