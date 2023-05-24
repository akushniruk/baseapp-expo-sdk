import React, { FC, useMemo } from "react";
import { Pressable, ActivityIndicator, PressableProps, Text } from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";
import { buttonStyles, ICustomButtonStyles } from "./button.styles";
import { getPalette } from "../../libs/getPalette";

export interface ButtonProps extends PressableProps {
    title: string;
    isLoading: boolean;
    customStyles?: ICustomButtonStyles;
}

export const Button: FC<ButtonProps> = ({ title, isLoading, testID, disabled, customStyles, onPress }: ButtonProps) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => buttonStyles(theme, customStyles), [theme]);

    return (
        <Pressable
            style={disabled ? [styles.disabled, styles.button] : [styles.active, styles.button]}
            disabled={disabled}
            onPress={onPress}
            testID={testID}
        >
            {isLoading ? (
                <ActivityIndicator color={`${getPalette(theme).Controls["primary-cta-layer-color"][60].value}`} />
            ) : (
                <Text style={disabled ? [styles.disabled, styles.title] : [styles.active, styles.title]}>{title}</Text>
            )}
        </Pressable>
    );
};
