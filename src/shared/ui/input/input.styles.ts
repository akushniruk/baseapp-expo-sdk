import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const inputStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        fieldWrapper: {},
        label: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][70].value,
        },
        input: {
            color: palette["text-color"][90].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette.Controls["divider-color"][20].value,
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: palette.Background["input-background-color"].value,
        },
        placeholder: {
            color: palette["text-color"][50].value,
        },
    });
};
