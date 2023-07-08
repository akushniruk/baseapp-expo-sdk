import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const orderFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        formContainer: {
            position: "relative",
            padding: 12,
            backgroundColor: palette.Background["main-background-color"].value,
        },
        headerContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        marketTypeButton: {
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: palette.Controls["primary-cta-color"][40].value,
            backgroundColor: palette.Controls["primary-cta-color"][10].value,
        },
        marketTypeButtonText: {
            color: palette.Controls["primary-cta-color"][80].value,
        },
        typeButtons: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        buttonBuy: {
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            color: palette["text-color"][70].value,
        },
        buttonBuyActive: {
            backgroundColor: palette.System["system-green"][10].value,
            borderColor: palette.System["system-green"][40].value,
            color: palette.System["system-green"][60].value,
        },
        buttonSell: {
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            borderRadius: 2,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            color: palette["text-color"][70].value,
        },
        buttonSellActive: {
            backgroundColor: palette.System["system-red"][10].value,
            borderColor: palette.System["system-red"][40].value,
            color: palette.System["system-red"][60].value,
        },
        bodyContainer: {
            width: "100%",
        },
        orderSelector: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: palette["text-color"][70].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderRadius: 2,
            backgroundColor: palette.Background["input-background-color"].value,
        },
        orderSelectorPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        orderSelectorText: {
            color: palette["text-color"][70].value,
            textTransform: "capitalize",
        },
        orderLabel: {
            marginTop: 24,
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][50].value,
        },
        orderType: {
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            paddingHorizontal: 12,
            paddingVertical: 16,
            marginBottom: 12,
            borderRadius: 4,
        },
        orderTypePressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        orderTypeText: {
            color: palette.Controls["neutral-control-layer-color"][90].value,
        },
        orderTypesContainer: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        button: {
            borderWidth: 0,
            borderColor: "#FFFFFF",
        },
        buttonAskActive: {
            backgroundColor: palette.System.ask[60].value,
            color: theme === "dark" ? palette["text-color"]["100"].value : palette["text-color"]["00"].value,
            borderWidth: 0,
        },
        buttonBidActive: {
            backgroundColor: palette.System.bid[60].value,
            color: theme === "dark" ? palette["text-color"]["100"].value : palette["text-color"]["00"].value,
        },
        buttonTitle: {
            fontSize: 18,
        },
        bestPrices: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 6,
        },
        bestPriceBid: {
            color: palette.System.bid[60].value,
        },
        bestPriceAsk: {
            color: palette.System.ask[60].value,
        },
        inputWrapper: {
            marginTop: 12,
        },
        totalContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
        },
        availableContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
        },
        totalText: {
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        containerValues: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        valueText: {
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        valueAvailableText: {
            fontSize: 14,
            color: palette["text-color"][70].value,
        },
        codeText: {
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        codeAvailableText: {
            fontSize: 14,
            color: palette["text-color"][70].value,
        },
        availableText: {
            color: palette["text-color"][70].value,
        },
        blurContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    });
};
