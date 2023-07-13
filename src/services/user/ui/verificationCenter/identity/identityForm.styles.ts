import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const identityFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 12,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
        steps: {
            marginTop: 24,
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        inputWrapper: {},
    });
};
