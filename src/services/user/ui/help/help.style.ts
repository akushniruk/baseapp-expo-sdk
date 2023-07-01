import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const helpStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        block: {
            marginTop: 36,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "Capitalize",
        },
        blockTitle: {
            color: palette["text-color"][70].value,
            fontSize: 18,
        },
        arrowColor: {
            color: palette["text-color"][70].value,
        },
    });
};
