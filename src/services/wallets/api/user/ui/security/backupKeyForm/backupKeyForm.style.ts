import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../../../shared/libs/getPalette";

export const backupKeyFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        textContainer: {
            marginTop: 24,
            paddingHorizontal: 12,
        },
        text: {
            fontSize: 16,
            color: palette["text-color"][70].value,
        },
        barCodeWrapper: {
            marginTop: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        barCode: {
            width: 250,
            height: 250,
        },
        copyFieldContainer: {
            marginTop: 48,
        },
        button: {
            marginTop: 24,
        },
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
        container: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
    });
};
