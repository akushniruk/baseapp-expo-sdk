import React, { FC } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";

interface SecondaryButtonProps extends PressableProps {
    title: string;
}

const SecondaryButton: FC<any> = (props: SecondaryButtonProps) => {
    return (
        <Pressable
            style={styles.secondaryButton}
            onPress={props.onPress}
            testID={props.testID}
        >
            <Text style={styles.secondaryButton}>{props.title}</Text>
        </Pressable>
    );
};

export default SecondaryButton;

const styles = StyleSheet.create({
    secondaryButton: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Palette.Controls["neutral-control-color"][30].value,
    },
    title: {
        fontSize: 12,
        backgroundColor:
            Palette.Controls["neutral-control-layer-color"][80].value,
    },
});
