import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const buttonStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
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
            color: palette.Controls["primary-cta-layer-color"][60].value,
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        disabled: {
            backgroundColor:
                palette.Controls["neutral-control-color"][20].value,
            color: palette.Controls["neutral-control-layer-color"][20].value,
        },
        title: {
            fontSize: 14,
        },
    });
};
