import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const tradesStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: "100%",
        },
        headContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
        },
        headContainerText: {
            fontSize: 12,
            color: palette["text-color"][50].value,
        },
        bodyContainer: {
            zIndex: 10,
            height: "100%",
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 3,
        },
        rowText: {
            color: palette["text-color"][100].value,
        },
        rowAsk: {
            color: palette.System.ask[40].value,
        },
        rowBid: {
            color: palette.System.bid[40].value,
        },
    });
};
