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
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
        container: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
    });
};
