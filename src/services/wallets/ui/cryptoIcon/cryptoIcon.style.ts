import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const cryptoIconStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        icon: {
            width: 48,
            height: 48,
        }
    });
};
