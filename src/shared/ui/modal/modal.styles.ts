import { StyleSheet } from "react-native";
import { getPalette } from "../../libs/getPalette";

export const modalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        // bottomSheet: {
        //     shadowColor: "#000",
        //     shadowOffset: {
        //         width: 0,
        //         height: 2,
        //     },
        //     shadowOpacity: 0.25,
        //     shadowRadius: 3.84,
        //     elevation: 5,
        // },
    });
};
