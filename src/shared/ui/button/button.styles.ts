import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export type ICustomButtonStyles = {
    button?: {
        // Define the CSS properties for the custom button style
        [property: string]: any;
    };
    active?: {
        // Define the CSS properties for the active button style
        [property: string]: any;
    };
    disabled?: {
        // Define the CSS properties for the disabled button style
        [property: string]: any;
    };
    title?: {
        // Define the CSS properties for the button title text
        [property: string]: any;
    };
};

export const buttonStyles = (theme: string, customStyles?: ICustomButtonStyles) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        button: {
            paddingHorizontal: 12,
            paddingVertical: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 44,
            borderRadius: 4,
            ...customStyles?.button,
        },
        active: {
            color: palette.Controls["primary-cta-layer-color"][60].value,
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            ...customStyles?.active,
        },
        disabled: {
            backgroundColor: palette.Controls["neutral-control-color"][20].value,
            color: palette.Controls["neutral-control-layer-color"][40].value,
            ...customStyles?.disabled,
        },
        title: {
            fontSize: 14,
            textTransform: "capitalize",
            ...customStyles?.title,
        },
    });
};
