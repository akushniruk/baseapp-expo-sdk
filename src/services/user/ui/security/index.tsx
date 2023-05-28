import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { ArrowRightIcon } from "../../../../assets/profile";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { securityStyles } from "./security.style";

export const Security: FC = () => {
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => securityStyles(theme), [theme]);

    return (
        <View>
            <Pressable onPress={() => linkTo("/TwoFactorAuth")} style={styles.block}>
                <Text style={styles.blockTitle}>Two-Factor Authentication (2FA)</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
            <Pressable onPress={() => linkTo("/AccountActivity")} style={styles.block}>
                <Text style={styles.blockTitle}>Account Activities</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
            <Pressable onPress={() => linkTo("/ChangePassword")} style={styles.block}>
                <Text style={styles.blockTitle}>Change Password</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
        </View>
    );
};
