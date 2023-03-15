import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const registerFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        inputWrapper: {
            marginBottom: 16,
        },
        error: {
            marginTop: 4,
            color: palette.System["system-red"][60].value,
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
