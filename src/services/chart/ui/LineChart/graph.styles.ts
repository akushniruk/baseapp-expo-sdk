import { StyleSheet } from "react-native";
import { SIZE } from "./model";
import { getPalette } from "../../../../shared/libs/getPalette";

export const graphStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor: "white",
        },
        graphContainer: {
            position: "relative",
            marginHorizontal: 12,
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
            bottom: -5,
        },
        xAxisValuesContainer: {
            position: "absolute",
            bottom: -20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: SIZE,
        },
    });
};
