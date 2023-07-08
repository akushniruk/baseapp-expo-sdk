import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const profileStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        icon: {
            color: palette["text-color"][70].value,
        },
        logoutButton: {
            marginBottom: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            borderRadius: 4,
            width: "100%",
            minHeight: 40,
        },
        logoutButtonText: {
            color: palette["text-color"][70].value,
        },
    });
};
