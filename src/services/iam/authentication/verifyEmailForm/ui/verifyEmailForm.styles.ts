import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const verifyEmailFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        verifyEmailForm: {
            maxWidth: 456,
        },
        infoText: {
            maxWidth: 456,
            color: palette["text-color"][70].value,
        },
        resendConfirmWrapper: {
            marginTop: 24,
            alignItems: "center",
            justifyContent: "center",
        },
        resendConfirmButton: {
            color: palette["text-color"][100].value,
            textDecorationLine: "underline",
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
