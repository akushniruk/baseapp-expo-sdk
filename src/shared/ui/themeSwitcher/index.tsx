import React, { FC } from "react";
import { Text } from "react-native";
import useTheme from "../../hooks/useTheme";
// import { Palette } from "../../styles/themes/defaultPalette";

export const ThemeSwitcher: FC = () => {
    useTheme();
    return <Text>test</Text>;
};
