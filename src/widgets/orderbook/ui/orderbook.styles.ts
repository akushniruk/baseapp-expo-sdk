import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const OrderbookWidgetStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: 600,
            backgroundColor: palette.Background["body-background-color"].value,
        },
        scrollViewContainer: {
            flex: 1,
        },
        orderbookContainer: {
            height: 750,
            backgroundColor: palette.Background["body-background-color"].value,
            display: "flex",
            flexDirection: "row",
        },
        orderbookTableWrapper: {
            width: "50%",
        },
        headerText: {
            color: palette["text-color"][70].value,
        },
    });
};
