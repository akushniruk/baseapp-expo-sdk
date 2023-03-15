import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../providers/theme";

export const useThemeContext = () => {
    const context = useContext(ThemeContext) as ThemeContextType;

    if (!context || context === undefined) {
        throw new Error("ThemeContext was used outside of its Provider");
    }

    return context;
};
