import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const copyFieldStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
            paddingVertical: 14,
            color: palette.Controls["neutral-control-layer-color"][100].value,
            backgroundColor: palette.Background["input-background-color"].value,
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderRadius: 4,
        },
        valueContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        valueText: {
            color: palette.Controls["neutral-control-layer-color"][100].value,
            marginRight: 12,
        },
        title: {
            color: palette.Controls["neutral-control-layer-color"][100].value,
        },
        copyColor: {
            color: palette.Controls["neutral-control-layer-color"][100].value,
        },
        touchHighlight: {
            color: palette.Controls["neutral-control-color"][40].value,
        },
    });
};
