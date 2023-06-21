import { StyleSheet } from "react-native";
import { getPalette } from "../../../libs/getPalette";

export const activate2FAStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        title: {
            fontWeight: "bold",
            fontSize: 20,
            color: palette["text-color"][100].value,
            marginBottom: 12,
        },
        subtitle: {
            marginBottom: 24,
            color: palette["text-color"][70].value,
        },
        bold: {
            color: palette["text-color"][100].value,
            fontWeight: "bold",
        },
    });
};
