import React, { FC } from "react";
import {
    Pressable,
    ActivityIndicator,
    PressableProps,
    StyleSheet,
    Text,
} from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";

interface ButtonProps extends PressableProps {
    title: string;
    isLoading: boolean;
}

const Button: FC<any> = (props: ButtonProps) => {
    return (
        <Pressable
            style={
                props.disabled
                    ? [styles.disabled, styles.button]
                    : [styles.active, styles.button]
            }
            disabled={props.disabled}
            onPress={props.onPress}
            testID={props.testID}
        >
            {props.isLoading ? (
                <ActivityIndicator color="#ffffff" />
            ) : (
                <Text
                    style={
                        props.disabled
                            ? [styles.disabled, styles.title]
                            : [styles.active, styles.title]
                    }
                >
                    {props.title}
                </Text>
            )}
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 32,
    },
    active: {
        color: Palette.Controls["primary-cta-layer-color"][60].value,
        backgroundColor: Palette.Controls["primary-cta-color"][60].value,
    },
    disabled: {
        backgroundColor: Palette.Controls["neutral-control-color"][20].value,
        color: Palette.Controls["neutral-control-layer-color"][20].value,
    },
    title: {
        fontSize: 14,
    },
});
