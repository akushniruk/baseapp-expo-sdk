import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const createBeneficiaryStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            paddingHorizontal: 12,
            height: "100%",
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
    });
};
