import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const marketsCarouselStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        card: {
            borderWidth: 1,
            padding: 6,
            marginRight: 12,
            borderRadius: 2,
            borderColor: palette.Controls["divider-color"][20].value,
            backgroundColor: palette.Background["main-background-color"].value,
        },
        market: {
            fontWeight: "700",
        },
        lastPrice: {
            paddingVertical: 4,
        },
        priceChangePositive: {
            color: palette.System.bid[40].value,
        },
        priceChangeNegative: {
            color: palette.System.ask[40].value,
        },
    });
};
