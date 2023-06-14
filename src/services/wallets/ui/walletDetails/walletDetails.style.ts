import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const walletDetailsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            backgroundColor: palette.Background["main-background-color"].value,
            paddingHorizontal: 12,
        },
        balanceContainer: {
            display: "flex",
            borderBottomWidth: 1,
            paddingBottom: 24,
            borderBottomColor: palette.Controls["divider-color"][20].value,
        },
        totalText: {
            fontSize: 16,
            color: palette["text-color"][70].value,
        },
        subTotalText: { fontSize: 12, color: palette["text-color"][50].value },
        totalDetailsContainer: {
            dispay: "flex",
            flexDirection: "row",
            marginTop: 24,
        },
        totalDetailsItemContainer: {
            display: "flex",
            flexDirection: "column",
        },
        availableText: {
            fontSize: 10,
            color: palette["text-color"][50].value,
            marginRight: 120,
        },
        availableValueText: {
            fontSize: 12,
            marginTop: 2,
            color: palette["text-color"][70].value,
        },
        unavailableText: {
            fontSize: 12,
            color: palette["text-color"][50].value,
        },
        unavailableValueText: {
            fontSize: 12,
            marginTop: 2,
            color: palette["text-color"][70].value,
        },
    });
};
