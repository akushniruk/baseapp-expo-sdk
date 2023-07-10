import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const createBeneficiaryStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            paddingHorizontal: 12,
            height: "100%",
            backgroundColor: palette.Background["body-background-color"].value,
        },
        inputWrapper: {
            marginBottom: 16,
        },
        error: {
            marginTop: 4,
            color: palette.System["system-red"][60].value,
        },
        containerNetworkModal: {
            marginTop: 12,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        networkSelector: {
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
            marginBottom: 24,
        },
        networkSelectorPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        networkSelectorText: {
            color: palette["text-color"][70].value,
            textTransform: "uppercase",
        },
        networkLabel: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][50].value,
        },
        networksContainer: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        network: {
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            paddingHorizontal: 12,
            paddingVertical: 16,
            marginBottom: 12,
            borderRadius: 4,
        },
        networkPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        networkText: {
            color: palette.Controls["neutral-control-layer-color"][90].value,
        },
        networkItemContainer: {
            display: "flex",
            flexDirection: "column",
        },
        networkItem: {
            display: "flex",
            flexDirection: "row",
        },
        networkItemRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        networkItemProtocol: {
            display: "flex",
            flexDirection: "row",
        },
        networkItemText: {
            color: palette["text-color"][70].value,
        },
        networkItemDisabledContainer: {
            marginBottom: 4,
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
            width: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: palette.System["system-red"][60].value,
        },
        networkItemDisabledText: {
            fontSize: 14,
            color: palette["text-color"][10].value,
        },
        networkItemLabel: {
            marginRight: 4,
            color: palette["text-color"][100].value,
        },
        networkItemValue: {
            color: palette["text-color"][100].value,
        },
        networkItemValueCode: {
            color: palette["text-color"][100].value,
        },
        otpLabel: {
            marginBottom: 4,
        },
    });
};
