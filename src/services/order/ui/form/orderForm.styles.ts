import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const orderFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        formContainer: {
            height: "100%",
            padding: 12,
        },
        headerContainer: {},
        orderTypeButton: {},
        typeButtons: {},
        buttonBuy: {},
        buttonSell: {},
        bodyContainer: {
            width: "100%",
        },
        balanceLabel: {},
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
            borderRadius: 4,
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
    });
};
