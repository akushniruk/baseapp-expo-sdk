import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { depositStyles } from "./deposit.styles";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";

export const Deposit: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => depositStyles(theme), [theme]);

    return <View>Deposit</View>;
};
