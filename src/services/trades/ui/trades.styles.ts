import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const tradesStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: 600,
            backgroundColor: palette.Background["body-background-color"].value,
        },
        headContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: palette.Controls["divider-color"][20].value,
        },
        headContainerText: {
            fontSize: 12,
            color: palette["text-color"][70].value,
        },
        bodyContainer: {
            zIndex: 10,
            height: 600,
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
            color: palette.System.ask[60].value,
        },
        rowBid: {
            color: palette.System.bid[60].value,
        },
    });
};
