import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const lineChartKlineStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {},
        periodsContainer: {
            paddingBottom: 24,
            paddingHorizontal: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
        },
        noData: {
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        noDataText: {
            marginTop: 12,
            color: palette["text-color"][70].value,
        },
    });
};
