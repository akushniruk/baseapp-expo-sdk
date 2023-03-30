import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const profileNavigationStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        block: {
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            textTransform: "Capitalize",
        },
        blockIcon: {
            paddingRight: 12,
            color: palette["text-color"][70].value,
        },
        blockTitle: {
            marginLeft: 12,
            color: palette["text-color"][100].value,
            fontSize: 14,
        },
        secondaryBlock: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
    });
};