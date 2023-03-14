import React, { FC } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { getPalette } from "../../libs/getPalette";

interface SecondaryButtonProps extends PressableProps {
    title: string;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
    title,
    testID,
    onPress,
}: SecondaryButtonProps) => {
    return (
        <Pressable
            style={styles.secondaryButton}
            onPress={onPress}
            testID={testID}
        >
            <Text style={styles.secondaryButton}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    secondaryButton: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
            getPalette().Controls["neutral-control-color"][30].value,
    },
    title: {
        fontSize: 12,
        backgroundColor:
            getPalette().Controls["neutral-control-layer-color"][80].value,
    },
});
