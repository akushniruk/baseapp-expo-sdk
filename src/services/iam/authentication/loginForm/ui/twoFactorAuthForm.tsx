import React, { FC, useCallback, useMemo } from "react";
import { View, Pressable, Text } from "react-native";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { useAppDispatch } from "../../../../../shared/providers/redux/lib/useAppDispatch";
import { Button } from "../../../../../shared/ui/button";
import { OTPInput } from "../../../../../shared/ui/otpInput";
import { setRequire2FA } from "../../../../user/model/userSlice";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { twoFactorAuthFormStyles } from "./twoFactorAuthFrom.styles";

interface TwoFactorAuthFormProps {
    code: string;
    isLoading: boolean;
    disabled: boolean;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

export const TwoFactorAuthForm: FC<TwoFactorAuthFormProps> = ({
    code = "",
    isLoading = false,
    disabled = true,
    onChange,
    onSubmit,
}) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => twoFactorAuthFormStyles(theme), [theme]);

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
