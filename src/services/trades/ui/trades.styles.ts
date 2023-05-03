import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const tradesStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: "100%",
        },
        headContainer: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        headContainerText: {},
        bodyContainer: {
            height: "100%",
        },
        row: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    });
};
