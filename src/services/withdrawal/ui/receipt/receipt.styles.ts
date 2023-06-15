import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const receiptStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {},
        title: {
            textAlign: "center",
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        textBlock: {
            marginTop: 12,
        },
        textBlockTitle: {
            color: palette["text-color"][50].value,
            fontSize: 12,
            marginBottom: 2,
        },
        textBlockSubTitle: {
            color: palette["text-color"][70].value,
            fontSize: 14,
        },
        secondTextBlock: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        secondTextBlockTitle: {
            color: palette["text-color"][50].value,
            fontSize: 12,
            marginBottom: 2,
        },
        secondTextBlockSubTitle: {
            color: palette["text-color"][70].value,
            fontSize: 14,
            textTransform: "uppercase",
        },
        totalBlock: {
            marginTop: 24,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 24,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            borderRadius: 4,
        },
        totalBlockTitle: {
            color: palette["text-color"][50].value,
            fontSize: 12,
            marginBottom: 2,
        },
        totalBlockSubTitle: {
            color: palette["text-color"][70].value,
            fontSize: 20,
            textTransform: "uppercase",
        },
        otpInputContainer: {
            marginTop: 24,
        },
        buttonContainer: {},
    });
};
