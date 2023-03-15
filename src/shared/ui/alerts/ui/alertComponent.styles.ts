import { StyleSheet } from "react-native";
import { getPalette } from "../../../libs/getPalette";

export const AlertComponentStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 0,
            zIndex: 1000,
            elevation: 1,
        },
        containerShown: {
            height: 65,
        },
        content: {
            flex: 1,
            backgroundColor: palette.Background["body-background-color"].value,
            maxWidth: 400,
            marginHorizontal: 15,
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: "center",
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: palette.Background["shadow-color"].value,
            shadowOpacity: 0.15,
            flexDirection: "row",
            elevation: 5,
        },
        contentIcon: {
            width: 45,
            height: 45,
            marginRight: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        contentTextWrapper: {
            display: "flex",
            justifyContent: "center",
            flex: 1,
        },
        contentTitle: {
            color: palette["text-color"][100].value,
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 2,
            textTransform: "capitalize",
        },
        contentMessage: {
            fontSize: 13,
            color: palette["text-color"][70].value,
        },
        iconWrapper: {
            alignItems: "flex-start",
            height: "100%",
            marginTop: 13,
            marginRight: 12,
        },
        icon: {
            height: 18,
            width: 18,
        },
    });
};
