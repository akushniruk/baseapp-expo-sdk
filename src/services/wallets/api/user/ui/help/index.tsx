import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { ArrowRightIcon } from "../../../../../../assets/profile";
import { useThemeContext } from "../../../../../../shared/hooks/useThemeContext";
import { helpStyles } from "./help.style";

export const Help: FC = () => {
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => helpStyles(theme), [theme]);

    return (
        <View style={{ height: "100%" }}>
            <Pressable style={styles.block}>
                <Text style={styles.blockTitle}>Privacy policy</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
            <Pressable style={styles.block}>
                <Text style={styles.blockTitle}>Chat</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
            <Pressable style={styles.block}>
                <Text style={styles.blockTitle}>Help Center (FAQ)</Text>
                <ArrowRightIcon color="#090909" />
            </Pressable>
        </View>
    );
};
