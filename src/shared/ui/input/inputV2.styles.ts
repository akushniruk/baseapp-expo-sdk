import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const inputV2Styles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        fieldWrapper: {
            width: "100%",
        },
        label: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][70].value,
        },
        input: {
            flex: 1,
            color: palette["text-color"][90].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            backgroundColor: palette.Background["input-background-color"].value,
        },
        inputWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
        },
        symbol: {
            width: 80,
            padding: 12,
            height: "100%",
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
        symbolText: {
            fontSize: 16,
            textAlign: "center",
            color: palette["text-color"][70].value,
        },
        placeholder: {
            color: palette["text-color"][50].value,
        },
    });
};
