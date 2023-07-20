import React, { FC, useMemo } from "react";
import { View, Text, Linking, Pressable } from "react-native";
import { permissionLevelStyles } from "./permissionLevel.style";
import { useThemeContext } from "../../hooks/useThemeContext";
import { Warning } from "../../../assets/system/warning";

interface IPermissionLevelProps {
    text: string;
}

export const PermissionLevel: FC<IPermissionLevelProps> = ({ text }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => permissionLevelStyles(theme), [theme]);

    // TODO: should redirect to KYC pages
    const redirectToWebsite = () => {
        Linking.openURL("https://aurora-master.uat.opendax.app/");
    };

    return (
        <View style={styles.container}>
            <View style={styles.warningContainer}>
                <View>
                    <Warning width={32} height={32} />
                </View>
                <View style={styles.warningTextWrapper}>
                    <Text style={styles.minimumLabel}>{text}</Text>
                    <Text style={styles.warningText}>
                        We are sorry to inform you that our current mobile application does not support Verification
                        process. However, we can help you with that. Please click on the link "Go to Verification" to
                        access our website and complete the KYC process. It's an easy and quick process that will ensure
                        your safety and security while using our services. Thank you for your cooperation and trust in
                        our platform.
                    </Text>
                    <Pressable onPress={redirectToWebsite}>
                        <Text style={styles.link}>Go to Verification</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
