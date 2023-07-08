import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const registerStyles = (theme: string) => {
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
        bottomContainer: {
            left: 12,
            borderColor: palette.Controls["divider-color"][20].value,
            paddingTop: 12,
            borderTopWidth: 1,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            bottom: 40,
        },
        bottomContainerText: {
            color: palette["text-color"][50].value,
            fontSize: 12,
        },
        bottomContainerLink: {
            marginTop: 4,
            color: palette["text-color"][100].value,
            fontSize: 16,
            fontWeight: "bold",
        },
        title: {
            fontSize: 24,
            marginBottom: 24,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
    });
};
