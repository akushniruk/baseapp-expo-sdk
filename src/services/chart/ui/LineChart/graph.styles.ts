import { StyleSheet } from "react-native";
import { PERIODS, SIZE } from "./model";
import { getPalette } from "../../../../shared/libs/getPalette";

const SELECTION_WIDTH = SIZE;
const BUTTON_WIDTH = SELECTION_WIDTH / PERIODS.length;

export const graphStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor: "white",
        },
        graphContainer: {
            position: "relative",
        },
        backgroundSelection: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            ...StyleSheet.absoluteFillObject,
            width: BUTTON_WIDTH,
            borderRadius: 1000,
        },
        selection: {
            flexDirection: "row",
            width: SELECTION_WIDTH,
            alignSelf: "center",
        },
        labelContainer: {
            padding: 8,
            width: BUTTON_WIDTH,
        },
        label: {
            fontSize: 16,
            color: palette["text-color"][70].value,
            fontWeight: "bold",
            textAlign: "center",
        },
        line: {
            color: palette.Controls["primary-cta-color"][60].value,
        },
        linearGradientTop: {
            color: palette.Controls["primary-cta-color"][60].value,
        },
        linearGradientBottom: {
            color: palette.Background["main-background-color"].value,
        },
        xAxisContainer: {
            position: "absolute",
            bottom: -40,
        },
    });
};
