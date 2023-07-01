import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const securityStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        block: {
            marginTop: 36,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "Capitalize",
        },
        blockTitle: {
            color: palette["text-color"][100].value,
            fontSize: 18,
        },
        switchEnabled: {
            backgroundColor: palette.Controls["primary-cta-color"][20].value,
            color: palette.Controls["primary-cta-color"][60].value,
        },
        switchInactive: {
            backgroundColor: palette.Controls["neutral-control-layer-color"][20].value,
            color: palette.Controls["neutral-control-color"][10].value,
        },
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
        container: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
        arrowColor: {
            color: palette["text-color"][70].value,
        },
    });
};
