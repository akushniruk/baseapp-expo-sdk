import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const depositStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: "100%",
            paddingHorizontal: 12,
            backgroundColor: palette.Background["main-background-color"].value,
        },
        depositContainer: {
            height: "100%",
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
        },
        networkSelectorPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        networkSelectorText: {
            color: palette["text-color"][70].value,
            textTransform: "uppercase",
        },
        networkLabel: {
            marginTop: 24,
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
        depositInfoContainer: {
            marginTop: 48,
        },
        QRCode: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: palette.Controls["divider-color"][20].value,
        },
        QRCodeTextContainer: {
            marginTop: 24,
        },
        QRCodeText: {
            textAlign: "center",
            color: palette["text-color"][50].value,
        },
        depositAddressContainer: {
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        copyColor: {
            color: palette.Controls["neutral-control-layer-color"][100].value,
        },
        depositAddressLabel: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][50].value,
        },
        depositAddress: {
            color: palette["text-color"][70].value,
        },
        minimumDepositContainer: {
            marginTop: 24,
        },
        minimumDepositLabel: {
            textTransform: "capitalize",
            marginBottom: 4,
            color: palette["text-color"][50].value,
        },
        minimumDeposit: {
            color: palette["text-color"][70].value,
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
    });
};
