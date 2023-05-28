import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const changePasswordFormStyles = (theme: string) => {
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
        backToLoginLinkWrapper: {
            display: "flex",
            alignItems: "center",
        },
        backToLoginLink: {
            marginTop: 16,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
    });
};
