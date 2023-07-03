import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const confirmBeneficiaryStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        info: {
            marginBottom: 24,
            color: palette["text-color"][100].value,
            backgroundColor: palette.Background["body-background-color"].value,
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
    });
};
