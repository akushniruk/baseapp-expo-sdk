import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const verificationCenterStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            width: "100%",
            flexDirection: "column",
        },
        profileImageWrapper: {
            alignItems: "center",
        },
        profileImage: {
            width: 54,
            height: 54,
            marginBottom: 18,
        },
        username: {
            color: palette["text-color"][70].value,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
        },
    });
};
