import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const forgotPasswordStyles = (theme: string) => {
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
        registerFormContainer: {
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        title: {
            fontSize: 24,
            marginBottom: 24,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
    });
};
