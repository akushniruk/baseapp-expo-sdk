import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const walletsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        scrollViewContainer: {},
        headerContainer: {},
        totalBalance: {},
        secondaryTotalBalance: {},
        historyIcon: {},
        buttonsContainer: {},
        listContainer: {},
        row: {},
        rowLeft: {},
        rowRight: {},
    });
};
