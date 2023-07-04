import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const chartStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: "100%",
        },
    });
};
