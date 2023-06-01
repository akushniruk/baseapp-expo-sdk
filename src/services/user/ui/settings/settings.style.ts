import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const settingsStyles = (theme: string) => {
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
            color: palette["text-color"][100].value,
            fontSize: 18,
        },
        blockContent: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        blockContentText: {
            marginRight: 12,
            color: palette["text-color"][50].value,
        },
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 12,
            fontSize: 18,
        },
        container: {
            marginTop: 12,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        languageContainer: {
            paddingVertical: 12,
            fontSize: 14,
        },
        languageText: {
            color: palette["text-color"][100].value,
        },
    });
};
