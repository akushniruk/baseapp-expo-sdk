import React, { FC, useMemo } from "react";
import { View, Image, Text } from "react-native";
import { VerifyEmailForm } from "../../../../../services/iam/authentication/verifyEmailForm";
import i18n from "../../../../../shared/libs/i18n/supportedLanguages";
import { verifyEmailStyles } from "./verifyEmail.style";
import { useThemeContext } from "../../../../../shared/hooks/useThemeContext";

export const VerifyEmail: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => verifyEmailStyles(theme), [theme]);

    return (
        <View style={styles.container}>
            <View style={styles.verifyEmailFormContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require("../../../../../assets/system/email_verify.png")}
                    ></Image>
                </View>
                <Text style={styles.title}>{i18n.t("VerifyEmailTitle")}</Text>
                <VerifyEmailForm />
            </View>
        </View>
    );
};
