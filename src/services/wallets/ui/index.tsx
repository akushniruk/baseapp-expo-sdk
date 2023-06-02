import { useLinkTo } from "@react-navigation/native";
import React, { FC, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { ArrowRightIcon } from "../../../assets/profile";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { walletsStyles } from "./wallets.style";

export const Wallets: FC = () => {
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();
    const styles = useMemo(() => walletsStyles(theme), [theme]);

    return (
        <View style={{ height: "100%" }}>
            <Text>Wallets</Text>
        </View>
    );
};
