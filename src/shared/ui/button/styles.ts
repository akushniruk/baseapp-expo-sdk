import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

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
        color: getPalette().Controls["primary-cta-layer-color"][60].value,
        backgroundColor: getPalette().Controls["primary-cta-color"][60].value,
    },
    disabled: {
        backgroundColor:
            getPalette().Controls["neutral-control-color"][20].value,
        color: getPalette().Controls["neutral-control-layer-color"][20].value,
    },
    title: {
        fontSize: 14,
    },
});
