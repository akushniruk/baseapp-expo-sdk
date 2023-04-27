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

export const buttonStyles = (
    theme: string,
    customStyles?: ICustomButtonStyles
) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        button: {
            paddingHorizontal: 12,
            paddingVertical: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 40,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][90].value,
            ...customStyles?.button,
        },
        active: {
            color: palette.Controls["primary-cta-layer-color"][60].value,
            backgroundColor: palette.Controls["primary-cta-color"][60].value,
            ...customStyles?.active,
        },
        disabled: {
            backgroundColor:
                palette.Controls["neutral-control-color"][20].value,
            color: palette.Controls["neutral-control-layer-color"][20].value,
            ...customStyles?.disabled,
        },
        title: {
            fontSize: 14,
            ...customStyles?.title,
        },
    });
};
