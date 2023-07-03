import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const orderStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            flex: 1,
            height: "100%",
            backgroundColor: palette.Background["body-background-color"].value,
        },
        scrollViewContainer: {
            flex: 1,
        },
        orderType: {
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            paddingHorizontal: 12,
            paddingVertical: 16,
            marginBottom: 12,
            borderRadius: 4,
        },
        orderTypePressed: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
        },
        orderTypeText: {
            color: palette.Controls["neutral-control-layer-color"][90].value,
        },
        orderTypesContainer: {
            marginTop: 24,
            backgroundColor: palette.Background["body-background-color"].value,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
    });
};
