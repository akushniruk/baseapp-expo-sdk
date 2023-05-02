import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const orderBookTableStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        row: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            position: "relative",
            marginRight: 4,
        },
        rowText: {
            position: "relative",
            zIndex: 10,
            paddingVertical: 2,
            color: palette["text-color"][60].value,
        },
        rowTextPriceAsks: {
            color: palette.System.ask[60].value,
            paddingLeft: 4,
        },
        rowTextPriceBids: {
            paddingRight: 4,
            color: palette.System.bid[60].value,
        },
        rowBackgroundColor: {
            position: "absolute",
            height: "100%",
            zIndex: 1,
        },
        rowBackgroundColorAsks: {
            backgroundColor: palette.System.ask[10].value,
        },
        rowBackgroundColorBids: {
            backgroundColor: palette.System.bid[10].value,
            right: 0,
        },
    });
};
