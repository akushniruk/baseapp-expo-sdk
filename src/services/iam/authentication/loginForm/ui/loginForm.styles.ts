import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const loginFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        inputWrapper: {
            marginBottom: 16,
        },
        error: {
            marginTop: 4,
            color: palette.System["system-red"][60].value,
        },
        forgotPasswordLinkWrapper: {
            display: "flex",
            alignItems: "center",
            marginTop: 24,
        },
        forgotPasswordLink: {
            fontSize: 14,
            color: palette["text-color"][100].value,
        },
    });
};
