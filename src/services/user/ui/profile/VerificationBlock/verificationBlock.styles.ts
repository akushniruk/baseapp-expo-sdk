import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const verificationBlockStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor:
                palette.Controls["neutral-control-color"][20].value,
            marginTop: 8,
            padding: 12,
            borderRadius: 2,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "45%",
            width: "50%",
        },
        containerWithMargin: {
            marginLeft: 12,
        },
        containerIcons: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        title: {
            textTransform: "capitalize",
            color: palette.Controls["neutral-control-layer-color"][100].value,
            marginTop: 12,
        },
    });
};
