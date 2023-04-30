import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const OrderbookWidgetStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            flexBasis: "auto",
            flexShrink: 0,
            flexGrow: 1,
        },
        orderbookTableWrapper: {
            width: "50%",
        },
    });
};
