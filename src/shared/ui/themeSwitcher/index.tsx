import React, { FC } from "react";
import { Text, Pressable } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export const ThemeSwitcher: FC = () => {
    const [theme, setNewTheme] = useTheme();

    return (
        <Pressable onPress={setNewTheme}>
            <Text>{`Current theme: ${theme}`}</Text>
        </Pressable>
    );
};
