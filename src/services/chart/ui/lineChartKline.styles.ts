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
        periodButton: {
            backgroundColor: palette.Background["main-background-color"].value,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            width: 56,
            height: 32,
            alignItems: "center",
            justifyContent: "center",
        },
        periodButtonActive: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        periodButtonPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][40].value,
        },
        periodButtonText: {
            color: palette["text-color"][100].value,
        },
        periodButtonTextActive: {
            fontWeight: "bold",
        },
    });
};
