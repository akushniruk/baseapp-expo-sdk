import { StyleSheet } from "react-native";
import { getPalette } from "../../../../../../shared/libs/getPalette";

export const profileDetailsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            width: "100%",
            flexDirection: "column",
        },
        profileImageWrapper: {
            alignItems: "center",
        },
        profileImage: {
            width: 54,
            height: 54,
            marginBottom: 18,
        },
        username: {
            color: palette["text-color"][100].value,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
        },
        verificationContainer: {
            marginTop: 24,
        },
        verificationContainerBlock: {
            flexDirection: "row",
            paddingHorizontal: 12,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
        },
        verificationContainerTitle: {
            color: palette["text-color"][100].value,
            fontSize: 18,
        },
        verificationContainerSubTitle: {
            color: palette["text-color"][60].value,
            fontSize: 18,
        },
        verificationContainerBlocks: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
        },
        block: {
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            textTransform: "Capitalize",
            paddingHorizontal: 12,
        },
        blockIcon: {
            paddingRight: 12,
            color: palette["text-color"][70].value,
        },
        blockTitle: {
            marginLeft: 12,
            color: palette["text-color"][100].value,
            fontSize: 18,
        },
        blockSubTitle: {
            color: palette["text-color"][60].value,
            fontSize: 14,
            marginLeft: 12,
        },
        secondaryBlock: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
    });
};
