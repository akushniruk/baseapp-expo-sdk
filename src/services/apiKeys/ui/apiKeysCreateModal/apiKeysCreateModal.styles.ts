import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const apiKeysCreateModalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
    });
};
