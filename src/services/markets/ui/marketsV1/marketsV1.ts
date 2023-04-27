import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const marketsV1Styles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {},
        headContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
        },
        headContainerText: {
            color: palette["text-color"][50].value,
            fontSize: 12,
        },
        bodyContainer: {},
        bodyContainerText: {
            color: palette["text-color"][90].value,
            fontSize: 14,
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
        },
        rowMarketText: {
            fontWeight: "700",
        },
        priceChangePositive: {
            backgroundColor: palette.System.bid[40].value,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 4,
        },
        priceChangeNegative: {
            backgroundColor: palette.System.ask[40].value,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 4,
        },
        labelText: {
            color: palette["text-color"]["00"].value,
            fontSize: 12,
        },
    });
};
