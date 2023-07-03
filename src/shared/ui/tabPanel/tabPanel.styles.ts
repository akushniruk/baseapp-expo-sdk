import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export type ICustomTabPanelStyles = {
    tabPanelContainer?: {
        [property: string]: any;
    };
    activeColor?: {
        [property: string]: any;
    };
    contentContainerStyle?: {
        [property: string]: any;
    };
    indicatorStyle?: {
        [property: string]: any;
    };
    labelStyle?: {
        [property: string]: any;
    };
    style?: {
        [property: string]: any;
    };
    tabViewStyle?: {};
};

export const tabPanelStyles = (theme: string, customStyles?: ICustomTabPanelStyles) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        tabPanelContainer: {
            width: "100%",
            height: "100%",
            ...customStyles?.tabPanelContainer,
        },
        activeColor: { color: palette.Controls["primary-cta-color"][60].value, ...customStyles?.activeColor },
        contentContainerStyle: {
            backgroundColor: palette.Background["body-background-color"].value,
            ...customStyles?.contentContainerStyle,
        },
        indicatorStyle: {
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            ...customStyles?.indicatorStyle,
        },
        labelStyle: {
            backgroundColor: palette.Background["body-background-color"].value,
            color: palette["text-color"][50].value,
            textTransform: "capitalize",
            fontWeight: "700",
            ...customStyles?.labelStyle,
        },
        tabViewStyle: {
            height: "100%",
            ...customStyles?.tabViewStyle,
        },
        style: { backgroundColor: palette.Background["body-background-color"].value, ...customStyles?.style },
    });
};
