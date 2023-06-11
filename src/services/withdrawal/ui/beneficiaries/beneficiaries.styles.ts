import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const beneficiariesStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        noData: {
            height: "100%",
            display: "flex",
            alignItems: "center",
        },
        noDataText: {
            paddingBottom: 24,
        },
    });
};
