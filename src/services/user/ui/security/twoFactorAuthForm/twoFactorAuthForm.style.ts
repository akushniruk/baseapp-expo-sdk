import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const twoFactorAuthFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            marginVertical: 36,
            fontSize: 14,
        },
        button: {
            width: "100%",
        },
        downloadContainer: {
            marginTop: 32,
            backgroundColor: palette.Controls["neutral-control-color"][50].value,
            fontSize: 14,
            paddingHorizontal: 24,
            paddingVertical: 16,
        },
        downloadButton: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
        },
        downloadText: {
            color: palette.Controls["neutral-control-layer-color"][70].value,
        },
    });
};
