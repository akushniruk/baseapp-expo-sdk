import { StyleSheet } from "react-native";
import { getPalette } from "../../../shared/libs/getPalette";

export const accountActivityStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            height: "100%",
        },
        containerTable: {},
        table: {},
        tableRow: {
            marginTop: 12,
            flexDirection: "column",
        },
        tableText: {},
        tableTextAction: {
            fontWeight: "700",
        },
        tableTextStatusSuccess: {
            textTransform: "capitalize",
            color: palette.System["system-green"][60].value,
        },
        tableTextStatusFail: {
            textTransform: "capitalize",
            color: palette.System["system-red"][60].value,
        },
        tableSplittedRow: {
            display: "flex",
            flexDirection: "row",
        },
        tableSubText: {
            color: palette["text-color"][40].value,
        },
        tableRowSeparatorWrapper: {
            width: "100%",
            alignItems: "baseline",
        },
        tableDateWrapper: {
            backgroundColor: palette.Controls["divider-color"][10].value,
            marginTop: 12,
            paddingHorizontal: 8,
            paddingVertical: 4,
            border: 1,
            borderRadius: 14,
            position: "relative",
        },
        tableDate: {
            backgroundColor: palette.Controls["divider-color"][10].value,
            color: palette["text-color"][50].value,
        },
        tableRowSeparator: {
            position: "absolute",
            backgroundColor: palette.Controls["divider-color"][10].value,
            width: "65%",
            height: 1,
            top: 12,
            left: 150,
        },
        containerPagination: {
            marginTop: 24,
            marginBottom: 64,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        paginationCounter: {
            paddingHorizontal: 12,
        },
        paginationButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: palette.Background["main-background-color"].value,
            borderWidth: 1,
            width: 36,
            height: 36,
            borderColor: palette.Controls["divider-color"][80].value,
        },
    });
};
