import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { LoginForm } from "../../../../../services/iam/authentication/loginForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { LoginProps } from "./interface";
import { Link } from "@react-navigation/native";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";
import { loginStyles } from "./login.styles";
import { useAppSelector } from "../../../../../shared";
import { RootState } from "../../../../../shared/providers/redux/model/store";
import { DismissKeyboard } from "../../../../../shared/ui/dismissKeyboard";

export const Login: FC<LoginProps> = ({ redirectToOnLogin = "/Home" }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => loginStyles(theme), [theme]);

    const require2FA: boolean = useAppSelector((state: RootState) => state.user.require2FA);

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.loginFormContainer}>
                    <Text style={styles.title}>{i18n.t("loginCreateAccountTitle")}</Text>
                    <LoginForm redirectToOnLogin={redirectToOnLogin} />
                </View>
                {!require2FA ? (
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomContainerText}>{i18n.t("loginDontHaveAnAccount")}</Text>
                        <Link style={styles.bottomContainerLink} to={{ screen: "Register" }}>
                            {i18n.t("loginRegistration")}
                        </Link>
                    </View>
                ) : null}
            </View>
        </DismissKeyboard>
    );
};
