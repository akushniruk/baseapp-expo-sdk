import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const tickersStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
        lastPrice: {
            fontSize: 24,
        },
        flexCenter: {},
        priceText: {
            textAlign: "right",
            color: palette["text-color"][50].value,
        },
        positive: {
            color: palette.System.bid[40].value,
        },
        negative: {
            color: palette.System.ask[40].value,
        },
    });
};
