import { useEffect, useState, useCallback } from "react";
import { Appearance } from "react-native";
import { setValueStorage, getValueStorage } from "./useMMKVStorage";

export const useTheme = () => {
    const colorScheme = Appearance.getColorScheme();
    const defaultTheme = getValueStorage("theme") || colorScheme;
    const [theme, setTheme] = useState<string>(defaultTheme || "light");

    const setNewTheme = useCallback(() => {
        console.log("test");
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme]);

    useEffect(() => {
        setValueStorage("theme", theme);
        // window.localStorage.setItem("tradingview.current_theme.name", theme);
    }, [theme]);

    return [theme, setNewTheme];
};
