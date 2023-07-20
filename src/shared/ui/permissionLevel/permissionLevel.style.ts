import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const permissionLevelStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            paddingVertical: 24,
            paddingHorizontal: 12,
            backgroundColor: palette.System["system-yellow"][10].value,
        },
        warningContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        warningTextWrapper: {
            marginLeft: 12,
            width: "80%",
        },
        warningText: {
            marginVertical: 12,
            color: palette["text-color"][100].value,
            lineHeight: 20,
        },
        minimumLabel: {
            color: palette["text-color"][100].value,
            fontWeight: "700",
            fontSize: 16,
        },
        link: {
            textDecorationLine: "underline",
            fontWeight: "700",
            color: palette["text-color"][100].value,
            fontSize: 16,
        },
    });
};
