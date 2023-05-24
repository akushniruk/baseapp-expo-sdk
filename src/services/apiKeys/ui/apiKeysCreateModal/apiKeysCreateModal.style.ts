import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const apiKeysCreateModalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        modalContainer: {
            height: "100%",
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            paddingHorizontal: 12,
        },
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
            height: "100%",
            flexWrap: "wrap",
            width: "100%",
        },
    });
};
