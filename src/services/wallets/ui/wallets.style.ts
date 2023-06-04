import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const walletsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        scrollViewContainer: {
            height: "100%",
        },
        headerContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        totalBalance: {
            fontSize: 18,
            color: palette["text-color"][70].value,
        },
        secondaryTotalBalance: {
            marginTop: 6,
            fontSize: 14,
            color: palette["text-color"][50].value,
        },
        historyIcon: {},
        buttonsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: palette.Controls["divider-color"][20].value,
        },
        listContainer: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderBottomColor: palette.Controls["divider-color"][20].value,
            borderBottomWidth: 1,
        },
        rowLeft: {
            display: "flex",
            flexDirection: "row",
        },
        rowLeftTextContainer: {
            display: "flex",
            flexDirection: "column",
            marginLeft: 12,
        },
        rowLeftTextName: {
            fontSize: 14,
            color: palette["text-color"][50].value,
        },
        rowLeftTextCurrency: {
            fontSize: 18,
            fontWeight: "600",
            color: palette["text-color"][70].value,
        },
        rowRight: {
            width: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
        },
        rowRightBalance: {
            color: palette["text-color"][70].value,
            fontSize: 16,
        },
        rowRightEstimatedBalance: {
            color: palette["text-color"][50].value,
        },
        inputWrapper: {
            display: "flex",
        },
        hideZero: {
            textColor: palette["text-color"][50].value,
            paddingVertical: 12,
        },
        searchContainer: {
            paddingVertical: 12,
        },
        title: {
            fontSize: 20,
            fontWeight: "600",
        },
    });
};
