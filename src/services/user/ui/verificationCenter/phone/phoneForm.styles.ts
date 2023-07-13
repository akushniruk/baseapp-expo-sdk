import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const phoneFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 12,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: palette["text-color"][100].value,
        },
        steps: {
            marginTop: 24,
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        phoneInputWrapper: {
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
        },
        phoneInput: {
            width: "65%",
        },
        buttonWrapper: {
            position: "absolute",
            width: "32%",
            right: 0,
            bottom: 0,
        },
        codeInputWrapper: {
            marginTop: 24,
        },
        submitButtonWrapper: {
            marginTop: 24,
        },
        timerWrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 44,
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            color: palette.Controls["neutral-control-layer-color"][40].value,
        },
        timerText: {
            color: palette.Controls["neutral-control-layer-color"][40].value,
        },
    });
};
