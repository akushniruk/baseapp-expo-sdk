import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const withdrawalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            paddingHorizontal: 12,
            marginTop: 24,
            height: "100%",
            position: "relative",
        },
        beneficiarySelector: {
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
        beneficiarySelectorPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        beneficiarySelectorRight: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        beneficiarySelectorStateContainer: {
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: palette.System["system-green"][60].value,
            marginRight: 12,
        },
        beneficiarySelectorStateText: {
            color: "#ffffff",
            textTransform: "capitalize",
        },
        networkContainer: {
            marginTop: 24,
        },
        networkLabel: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][50].value,
        },
        networkNameContainer: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
        },
        inputContainer: {
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        inputWrapper: {
            width: "80%",
        },
        buttonWrapper: {
            width: "18%",
            marginTop: 20,
            marginLeft: 6,
        },
        receiptContainer: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        totalContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 120,
            width: "100%",
            paddingTop: 12,
            left: 12,
            borderTopWidth: 1,
            borderTopColor: palette.Controls["divider-color"][20].value,
        },
        totalLabel: {
            textTransform: "capitalize",
            color: palette["text-color"][50].value,
        },
        total: {
            fontSize: 20,
            color: palette["text-color"][70].value,
        },
        totalFee: {
            color: palette["text-color"][50].value,
        },
        totalButtonContainer: {},
    });
};
