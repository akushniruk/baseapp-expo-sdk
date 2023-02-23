import { Link } from "@react-navigation/native";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import Button from "../../../../../shared/ui/button";
import OTPInput from "../../../../../shared/ui/otpInput";

interface TwoFactorAuthFormProps {
    code: string;
    isLoading: boolean;
    disabled: boolean;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

const TwoFactorAuthForm: FC<TwoFactorAuthFormProps> = ({
    code = "",
    isLoading = false,
    disabled = true,
    onChange,
    onSubmit,
}) => {
    return (
        <View style={styles.twoFactorAuthFormContainer}>
            <OTPInput code={code} setCode={onChange} maximumLength={6} />
            <Button
                isLoading={isLoading}
                disabled={disabled}
                title={i18n.t("loginFormCreateNewAccountButton")}
                onPress={onSubmit}
            />
            <View style={styles.backToLoginLinkWrapper}>
                {/* Pressable dispatch require 2fa false */}
                <Link style={styles.backToLoginLink} to={{ screen: "Login" }}>
                    Back to Login
                </Link>
            </View>
        </View>
    );
};

export default TwoFactorAuthForm;

const styles = StyleSheet.create({
    twoFactorAuthFormContainer: {
        maxWidth: 456,
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
