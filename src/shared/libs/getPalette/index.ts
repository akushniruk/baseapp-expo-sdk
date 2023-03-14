import { getValueStorage } from "../../hooks/useMMKVStorage";
import { DarkPalette, LightPalette } from "../../styles/themes/defaultPalette";

// TODO: rework to ThemeProvider
export const getPalette = () => {
    const currentTheme = getValueStorage("theme");

    return currentTheme === "dark" ? DarkPalette : LightPalette;
};
