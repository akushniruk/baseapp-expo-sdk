import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../shared/libs/getPalette";

export const documentsFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            // flex: 1,
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
        inputWrapper: {
            marginTop: 24,
        },
        uploadContainer: {
            marginTop: 24,
        },
        documentsContainer: {},
        buttonsWrapper: {
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
        },
        buttonsWrapperTwo: {
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
        },
        button: {
            width: "25%",
        },
    });
};
