import { DarkPalette, LightPalette } from "../../styles/themes/defaultPalette";

export const getPalette = (theme: string) =>
    // TODO: palette should be stored in context;
    // it will allows us to dynamic change palette color from customer application
    theme === "dark" ? DarkPalette : LightPalette;
