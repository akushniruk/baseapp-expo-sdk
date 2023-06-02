import React, { FC, useMemo } from "react";
import { View, Image, Text } from "react-native";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { cryptoIconStyles } from "./cryptoIcon.style";

export interface ICryptoIcon {
    code: string;
}

export const CryptoIcon: FC<ICryptoIcon> = ({ code }) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => cryptoIconStyles(theme), [theme]);

    // TODO: handle all icon from assets/crypto-icons
    switch (code) {
        case "usdt":
            return <Image source={require(`../../../../assets/crypto-icons/usdt.png`)} />;
        default:
            return <Image source={require(`../../../../assets/crypto-icons/generic.png`)} />;
    }
};
