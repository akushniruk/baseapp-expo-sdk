import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const verifyEmailStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingHorizontal: 12,
            backgroundColor: palette.Background["main-background-color"].value,
        },
        verifyEmailFormContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        imageContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 256,
            height: 256,
        },
        title: {
            fontSize: 24,
            marginBottom: 24,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
    });
};
