import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import {
    ResendVerificationCodeType,
    useResendVerificationCodeMutation,
} from "../api/verifyEmailFormApi";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { verifyEmailFormStyles } from "./verifyEmailForm.styles";

export const VerifyEmailForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => verifyEmailFormStyles(theme), [theme]);

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
