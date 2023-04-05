import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const apiKeysTableStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            marginTop: 12,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
        },
        row: {
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between",
        },
        rowItem: {
            width: 160,
            paddingBottom: 12,
        },
        bold: {
            fontWeight: "500",
        },
        inactiveColor: {
            color: palette.System["system-red"][40].value,
            textTransform: "capitalize",
        },
        activeColor: {
            color: palette.System["system-green"][40].value,
            textTransform: "capitalize",
        },
        value: {
            fontSize: 14,
            color: palette["text-color"][100].value,
        },
        title: {
            fontSize: 12,
            textTransform: "capitalize",
            color: palette["text-color"][60].value,
        },
        hide: {
            opacity: 0,
        },
        cancelIcon: {
            paddingLeft: 24,
        },
        switchEnabled: {
            backgroundColor: palette.Controls["primary-cta-color"][20].value,
            color: palette.Controls["primary-cta-color"][60].value,
        },
        switchInactive: {
            backgroundColor:
                palette.Controls["neutral-control-layer-color"][20].value,
            color: palette.Controls["neutral-control-color"][10].value,
        },
    });
};
