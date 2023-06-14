import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useMemo } from "react";
import { View, Text, Pressable, Platform, Linking } from "react-native";
import { useThemeContext } from "../../../../../../../shared/hooks/useThemeContext";
import { twoFactorAuthFormStyles } from "./twoFactorAuthForm.style";
import { ShieldIcon } from "../../../../../../../assets/profile/security/shield";
import { Button } from "../../../../../../../shared";
import { ArrowRightIcon } from "../../../../../../../assets/profile";

export const TwoFactorAuthForm: FC = () => {
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => twoFactorAuthFormStyles(theme), [theme]);

    const redirectToActivate = useCallback(() => {
        linkTo("/BackupKey");
    }, []);

    const redirectToStore = useCallback(() => {
        Platform.OS === "android"
            ? Linking.openURL("https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2")
            : Linking.openURL("https://apps.apple.com/ua/app/google-authenticator/id388497605");
    }, []);

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.container}>
                <ShieldIcon />
                <Text style={styles.text}>
                    Please download and install Google Authenticator. Then, tap "Link" to active Two-Factor
                    Authentication
                </Text>
                <View style={styles.button}>
                    <Button title="Link" onPress={redirectToActivate} isLoading={false} />
                </View>
            </View>
            <View style={styles.downloadContainer}>
                <Pressable style={styles.downloadButton} onPress={redirectToStore}>
                    <Text style={styles.downloadText}>Download Google Authenticator</Text>
                    <ArrowRightIcon color={styles.downloadText.color} />
                </Pressable>
            </View>
        </View>
    );
};
