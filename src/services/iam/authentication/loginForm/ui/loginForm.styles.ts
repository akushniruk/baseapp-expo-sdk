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
            alignItems: "flex-end",
        },
        forgotPasswordLink: {
            marginTop: 4,
        },
        registerLinkWrapper: {
            display: "flex",
            alignItems: "flex-start",
        },
        registerLink: {
            marginTop: 16,
            color: palette.Controls["primary-cta-color"][60].value,
        },
    });
};
