import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const tabPanelStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        tabPanelContainer: {
            width: "100%",
            height: "100%",
        },
        activeColor: { color: palette.Controls["primary-cta-color"][60].value },
        contentContainerStyle: { backgroundColor: palette.Background["body-background-color"].value },
        indicatorStyle: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        labelStyle: {
            backgroundColor: palette.Background["body-background-color"].value,
            color: palette["text-color"][50].value,
            textTransform: "capitalize",
            fontWeight: "700",
        },
        style: { backgroundColor: palette.Background["body-background-color"].value },
    });
};
