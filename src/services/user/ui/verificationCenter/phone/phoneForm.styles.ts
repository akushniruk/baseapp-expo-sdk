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
            width: "70%",
        },
        buttonWrapper: {
            position: "absolute",
            width: "27%",
            right: 0,
            bottom: 0,
        },
        codeInputWrapper: {
            marginTop: 24,
        },
        submitButtonWrapper: {
            marginTop: 24,
        },
        timerWrapper: {},
    });
};
