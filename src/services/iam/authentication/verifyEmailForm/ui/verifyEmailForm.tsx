import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Link } from "@react-navigation/native";
import { ResendVerificationCodeType, useResendVerificationCodeMutation } from "../api/verifyEmailFormApi";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { verifyEmailFormStyles } from "./verifyEmailForm.styles";
import { User } from "../../../../user";
import { useAppSelector } from "../../../../../shared";
import { RootState } from "../../../../../shared/providers/redux/model/store";

export const VerifyEmailForm: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => verifyEmailFormStyles(theme), [theme]);

    const [resendVerificationCode, { isLoading }] = useResendVerificationCodeMutation();

    const profile: User | null = useAppSelector((state: RootState) => state.user.profile);

    const onPress = useCallback(() => {
        if (profile?.email) {
            const resendVerificationData: ResendVerificationCodeType = {
                email: profile.email,
                captcha_response: "",
            };

            resendVerificationCode(resendVerificationData);
        }
    }, [profile]);

    return (
        <View style={styles.verifyEmailForm}>
            <Text style={styles.infoText}>{i18n.t("verifyEmailFormInfo")}</Text>
            {isLoading ? (
                <ActivityIndicator color={styles.loader.color} />
            ) : (
                <Pressable style={styles.resendConfirmWrapper} onPress={onPress}>
                    <Text style={styles.resendConfirmButton}>{i18n.t("verifyEmailResend")}</Text>
                </Pressable>
            )}
            <View style={styles.backToLoginLinkWrapper}>
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    {i18n.t("verifyEmailFormBackToLoginButton")}
                </Link>
            </View>
        </View>
    );
};
