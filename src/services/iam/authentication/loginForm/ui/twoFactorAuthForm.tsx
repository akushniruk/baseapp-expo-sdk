import React, { FC, useCallback } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { useAppDispatch } from "../../../../../shared/providers/redux/lib/useAppDispatch";
import { Palette } from "../../../../../shared/styles/themes/defaultPalette";
import Button from "../../../../../shared/ui/button";
import OTPInput from "../../../../../shared/ui/otpInput";
import { setRequire2FA } from "../../../../user/model/userSlice";

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
    const dispatch = useAppDispatch();

    const changeRequire2FA = useCallback(() => {
        dispatch(setRequire2FA(false));
    }, []);

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
                <Pressable
                    style={styles.backToLoginLink}
                    onPress={changeRequire2FA}
                >
                    <Text>{i18n.t("twoFactorAuthFormBackToLogin")}</Text>
                </Pressable>
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
