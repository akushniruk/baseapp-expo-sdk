import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const walletsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        scrollViewContainer: {
            height: "100%",
            paddingHorizontal: 12,
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
        historyIcon: {
            paddingLeft: 12,
            paddingBottom: 6,
        },
        buttonsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: palette.Controls["divider-color"][20].value,
        },
        buttonContainer: {
            width: "32%",
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
        searchWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        searchIcon: {
            color: palette["text-color"][90].value,
            padding: 12,
            fontSize: 16,
            borderColor: palette["text-color"][20].value,
            borderWidth: 1,
            borderRightWidth: 1,
            backgroundColor: palette.Background["input-background-color"].value,
        },
        searchIconActive: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            borderRightWidth: 0,
        },
        searchIconPressed: {
            backgroundColor: palette.Controls["primary-cta-color"][40].value,
        },
        inputWrapper: {
            display: "flex",
            width: "50%",
        },
        hideZero: {
            textColor: palette["text-color"][50].value,
            paddingVertical: 12,
        },
        searchContainer: {
            paddingTop: 12,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
        },
        title: {
            fontSize: 20,
            fontWeight: "600",
        },
        checkbox: {
            backgroundColor: palette.Background["main-background-color"].value,
            color: palette.Controls["primary-cta-color"][60].value,
        },
        checkboxText: {
            textDecorationLine: "none",
            color: palette["text-color"][50].value,
        },
        noData: {
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        noDataText: {
            marginTop: 12,
        },
    });
};
