import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const apiKeysCreateModalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        title: {
            color: palette["text-color"][100].value,
            fontWeight: "bold",
            marginBottom: 6,
        },
        subtitle: {
            color: palette["text-color"][70].value,
        },
        copyFieldContainer: {
            marginVertical: 24,
        },
        container: {
            marginVertical: 24,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
        },
        warningIcon: {
            paddingRight: 12,
        },
        textContainer: {
            flex: 1,
            flexWrap: "wrap",
            width: "100%",
        },
    });
};
