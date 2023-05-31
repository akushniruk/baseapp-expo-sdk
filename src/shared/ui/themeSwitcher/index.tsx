import React, { FC } from "react";
import { Text, Pressable, GestureResponderEvent } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";

// TODO: remove
export const ThemeSwitcher: FC = () => {
    const { theme, setTheme } = useThemeContext();

    return (
        <Pressable onPress={(event: GestureResponderEvent) => setTheme(theme === "dark" ? "light" : "dark")}>
            <Text>{`Current theme: ${theme}`}</Text>
        </Pressable>
    );
};
