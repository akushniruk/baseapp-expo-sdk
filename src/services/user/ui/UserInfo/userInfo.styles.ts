import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const userInfoFormStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            width: "100%",
            flexDirection: "row",
        },
        infoWrapper: {
            flexDirection: "row",
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
            flexDirection: "row",
        },
        labelWrapper: {
            flexDirection: "row",
            marginRight: 12,
            paddingHorizontal: 12,
            paddingVertical: 4,
        },
        labelIcon: {
            marginRight: 6,
        },
        label: {},
        unverified: {},
        verified: {},
        feeGroupBackground: {
            borderRadius: 4,
            backgroundColor:
                palette.Controls["neutral-control-color"][80].value,
        },
        feeGroupText: {
            color: palette.Controls["neutral-control-layer-color"][100].value,
        },
        arrowRight: {},
        icon: {
            marginRight: 12,
            width: 36,
            height: 36,
        },
    });
};
