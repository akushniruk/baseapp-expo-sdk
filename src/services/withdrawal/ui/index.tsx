import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { withdrawalStyles } from "./withdrawal.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";

export const Withdrawal: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => withdrawalStyles(theme), [theme]);

    return <View>Withdrawal</View>;
};
