import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const verificationBlockStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            marginRight: 12,
            marginTop: 8,
            padding: 12,
            borderRadius: 2,
            width: "45%",
        },
        containerIcons: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        title: {
            textTransform: "capitalize",
            color: palette.Controls["neutral-control-layer-color"][100].value,
            marginTop: 12,
        },
    });
};
