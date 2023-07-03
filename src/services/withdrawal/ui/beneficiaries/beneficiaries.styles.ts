import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const beneficiariesStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            marginTop: 12,
            height: "100%",
            position: "relative",
            backgroundColor: palette.Background["main-background-color"].value,
        },
        blockchainKeyContainer: {},
        beneficiarySelector: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: palette["text-color"][70].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette["text-color"][20].value,
            borderBottomWidth: 1,
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
        beneficiarySelectorStatePending: {
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderRadius: 4,
            backgroundColor: "#ff8400",
            marginRight: 12,
        },
        beneficiarySelectorStateText: {
            color: "#ffffff",
            textTransform: "capitalize",
        },
        deleteButton: {
            padding: 6,
        },
        noData: {
            height: "100%",
            display: "flex",
            alignItems: "center",
        },
        noDataText: {
            paddingBottom: 24,
            color: palette["text-color"][70].value,
        },
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
        modalContainer: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        networkContainer: {
            backgroundColor: palette.Controls["primary-cta-color"][10].value,
            padding: 12,
        },
        networkRow: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
        },
        networkRowTitle: {
            fontSize: 16,
            color: palette.Controls["primary-cta-layer-color"][60].value,
            fontWeight: "700",
        },
        networkSubRow: {
            display: "flex",
            flexDirection: "row",
        },
        networkSubRowTitle: {
            fontSize: 14,
            color: palette.Controls["primary-cta-layer-color"][60].value,
        },
        networkSubRowSubTitle: {
            fontSize: 14,
            color: palette.Controls["primary-cta-layer-color"][60].value,
        },
        networkName: {
            color: palette.Controls["primary-cta-layer-color"][60].value,
            fontSize: 14,
        },
        networkMinRow: {
            display: "flex",
            flexDirection: "row",
        },
        networkMinRowTitle: {
            fontSize: 12,
            color: palette.Controls["primary-cta-layer-color"][60].value,
        },
        networkMinRowSubTitle: {
            fontSize: 12,
            color: palette.Controls["primary-cta-layer-color"][60].value,
        },
        beneficiaryName: {
            color: palette["text-color"][100].value,
        },
        beneficiaryAddress: {
            color: palette["text-color"][100].value,
        },
        trashIcon: {
            color: palette["text-color"][100].value,
        },
    });
};
