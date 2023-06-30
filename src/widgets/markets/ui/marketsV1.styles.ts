import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const MarketsV1WidgetStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            paddingHorizontal: 12,
        },
        title: {
            fontWeight: "700",
            fontSize: 18,
        },
        headerContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        searchWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        searchIcon: {
            color: palette["text-color"][90].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderRightWidth: 1,
            backgroundColor: palette.Background["input-background-color"].value,
        },
        searchIconActive: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            borderRightWidth: 0,
        },
        searchIconPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][40].value,
        },
        inputWrapper: {
            display: "flex",
            width: "70%",
        },
    });
};
