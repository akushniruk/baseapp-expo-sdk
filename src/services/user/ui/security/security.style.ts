import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const securityStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        block: {
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "Capitalize",
        },
        blockTitle: {
            color: palette["text-color"][100].value,
            fontSize: 18,
        },
    });
};
