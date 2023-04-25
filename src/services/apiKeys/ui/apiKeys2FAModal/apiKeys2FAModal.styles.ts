import { StyleSheet } from "react-native";
import { getPalette } from "../../../../shared/libs/getPalette";

export const apiKeys2FAModalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        label: {
            color: palette["text-color"][100].value,
            marginBottom: 6,
        },
        container: {
            height: "100%",
            backgroundColor: palette.Background["body-background-color"].value,
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 12,
        },
    });
};
