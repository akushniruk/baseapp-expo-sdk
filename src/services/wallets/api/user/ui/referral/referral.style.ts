import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../../shared/libs/getPalette";

export const referralStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        copyFieldContainer: {
            marginTop: 24,
            marginBottom: 12,
        },
        title: {
            fontWeight: "bold",
            fontSize: 20,
            color: palette["text-color"][100].value,
        },
        subtitle: {
            marginTop: 12,
            marginBottom: 24,
            color: palette["text-color"][70].value,
        },
    });
};
