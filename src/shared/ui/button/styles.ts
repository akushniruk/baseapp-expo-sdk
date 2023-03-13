import { StyleSheet } from "react-native";
import { Palette } from "../../styles/themes/defaultPalette";

export type StylesType = typeof buttonStyles;

export const buttonStyles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 32,
    },
    active: {
        color: Palette.Controls["primary-cta-layer-color"][60].value,
        backgroundColor: Palette.Controls["primary-cta-color"][60].value,
    },
    disabled: {
        backgroundColor: Palette.Controls["neutral-control-color"][20].value,
        color: Palette.Controls["neutral-control-layer-color"][20].value,
    },
    title: {
        fontSize: 14,
    },
});
