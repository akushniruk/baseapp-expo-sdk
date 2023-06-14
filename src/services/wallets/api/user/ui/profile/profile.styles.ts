import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../../shared/libs/getPalette";

export const profileStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        infoWrapper: {
            flexDirection: "row",
            alignItems: "center",
        },
        infoContainer: {
            flexDirection: "column",
            justifyContent: "space-between",
        },
        username: {
            fontWeight: "bold",
            fontSize: 16,
        },
        details: {
            marginTop: 4,
            flexDirection: "row",
        },
        labelWrapper: {
            flexDirection: "row",
            marginRight: 4,
            alignItems: "center",
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 4,
        },
        labelIconVerified: {
            color: palette.System["system-green"][60].value,
        },
        labelIconUnverified: {
            color: palette.Controls["neutral-control-layer-color"][80].value,
        },
        labelIcon: {
            marginRight: 6,
            justifyContent: "center",
        },
        unverified: {
            backgroundColor: palette.Controls["neutral-control-color"][60].value,
            color: palette.Controls["neutral-control-layer-color"][80].value,
        },
        verified: {
            backgroundColor: palette.System["system-green"][10].value,
            color: palette.System["system-green"][60].value,
        },
        feeGroupBackground: {
            borderRadius: 4,
            backgroundColor: palette.Controls["neutral-control-color"][60].value,
        },
        feeGroupText: {
            color: palette.Controls["neutral-control-layer-color"][80].value,
        },
        arrowRight: {
            color: palette.Controls["neutral-control-layer-color"][80].value,
        },
        icon: {
            marginRight: 12,
            width: 36,
            height: 36,
        },
    });
};
