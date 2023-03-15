import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const secondaryButtonStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        secondaryButton: {
            paddingHorizontal: 5,
            paddingVertical: 5,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
                palette.Controls["neutral-control-color"][30].value,
        },
        title: {
            fontSize: 12,
            backgroundColor:
                palette.Controls["neutral-control-layer-color"][80].value,
        },
    });
};
