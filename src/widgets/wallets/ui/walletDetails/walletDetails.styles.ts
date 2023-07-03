import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const walletDetailsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
        marketsContainer: {
            marginTop: 24,
            paddingHorizontal: 12,
        },
        marketsHeaderContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 6,
        },
        marketsText: {
            color: palette["text-color"][70].value,
            fontWeight: "600",
        },
        marketsMore: {
            color: palette.Controls["primary-cta-color"][60].value,
            fontWeight: "600",
        },
        historyContainer: {
            marginTop: 24,
            paddingHorizontal: 12,
        },
        historyHeaderContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 6,
        },
        historyText: {
            color: palette["text-color"][70].value,
            fontWeight: "600",
        },
        historyMore: {
            color: palette.Controls["primary-cta-color"][60].value,
            fontWeight: "600",
        },
        noData: {
            marginTop: 12,
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
