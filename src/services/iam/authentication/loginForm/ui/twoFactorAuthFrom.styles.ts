import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const twoFactorAuthFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        twoFactorAuthFormContainer: {
            maxWidth: 456,
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
