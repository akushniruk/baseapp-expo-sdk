import { useEffect, useState, useCallback } from "react";
import { Appearance } from "react-native";
import { setValueStorage, getValueStorage } from "./useMMKVStorage";

export const useTheme = () => {
    const colorScheme = Appearance.getColorScheme();
    setValueStorage("postIndex", "test123");

    const [theme, setTheme] = useState("light");

    console.log("colorScheme", colorScheme);
    console.log(getValueStorage("postIndex"));
    // const setNewTheme = useCallback(
    //     () => setTheme(theme === "dark" ? "light" : "dark"),
    //     [theme]
    // );

    // const colorTheme = theme === "dark" ? "light" : "dark";

    // useEffect(() => {
    // setTheme(
    //     window.localStorage.theme ? window.localStorage.theme : "light"
    // );
    // }, []);

    // useEffect(() => {
    // const root = window.document.body;
    // root.classList.remove(colorTheme);
    // root.classList.add(theme);
    // if (isBrowser()) {
    //     dispatch(changeTheme(theme));
    //     dispatch(toggleChartRebuild());
    //     window.localStorage.setItem("theme", theme);
    //     window.localStorage.setItem(
    //         "tradingview.current_theme.name",
    //         theme
    //     );
    // }
    // }, [theme]);

    return [theme, setTheme];
};

export default useTheme;
