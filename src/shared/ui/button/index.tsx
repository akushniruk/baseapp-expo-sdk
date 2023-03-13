import React, { FC } from "react";
import {
    Pressable,
    ActivityIndicator,
    PressableProps,
    StyleSheet,
    Text,
} from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";
import { buttonStyles, StylesType } from "./styles";

export interface ButtonProps extends PressableProps {
    title: string;
    isLoading: boolean;
    styles?: StylesType;
}

export const Button: FC<ButtonProps> = ({
    title,
    isLoading,
    testID,
    disabled,
    styles = buttonStyles,
    onPress,
}: ButtonProps) => {
    return (
        <Pressable
            style={
                disabled
                    ? [styles.disabled, styles.button]
                    : [styles.active, styles.button]
            }
            disabled={disabled}
            onPress={onPress}
            testID={testID}
        >
            {isLoading ? (
                <ActivityIndicator
                    color={`${Palette.Controls["primary-cta-layer-color"][60].value}`}
                />
            ) : (
                <Text
                    style={
                        disabled
                            ? [styles.disabled, styles.title]
                            : [styles.active, styles.title]
                    }
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
};
