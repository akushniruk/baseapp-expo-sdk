import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const otpInputStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        otpInputContainer: {
            marginBottom: 24,
        },
        boxAndPastContainer: {
            flexDirection: "row",
            maxHeight: 40,
            justifyContent: "space-between",
        },
        textInputHidden: {
            borderColor: "transparent",
            color: "transparent",
            position: "absolute",
            opacity: 0,
        },
        splitOTPBoxesContainer: {
            flexDirection: "row",
        },
        splitBoxes: {
            backgroundColor: palette.Background["input-background-color"].value,
            borderColor: palette.Controls["neutral-control-color"][70].value,
            borderWidth: 2,
            borderRadius: 4,
            marginRight: 6,
            alignItems: "center",
            justifyContent: "center",
            minWidth: 40,
            minHeight: 40,
        },
        splitBoxText: {
            fontSize: 14,
            textAlign: "center",
            color: palette["text-color"][100].value,
        },
        splitBoxesFocused: {
            borderColor: palette.Controls["primary-cta-color"][60].value,
            backgroundColor: palette.Background["input-background-color"].value,
            color: palette["text-color"][100].value,
        },
        placeholder: {
            color: palette["text-color"][50].value,
        },
    });
};
