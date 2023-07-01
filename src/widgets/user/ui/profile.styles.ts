import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const profileStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        icon: {
            color: palette["text-color"][70].value,
        },
    });
};
