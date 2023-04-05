import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { Appearance } from "react-native";
import { getValueStorage, setValueStorage } from "../../hooks/useMMKVStorage";

export type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: any) => {
    const colorScheme = Appearance.getColorScheme();

    const [theme, setTheme] = useState<any>("light");

    const getValue = useCallback(async () => {
        const themeFromStorage = await getValueStorage("theme");

        setTheme("light");
    }, []);

    useEffect(() => {
        getValue();
    }, []);

    useEffect(() => {
        setValueStorage("theme", theme || "light");
    }, [theme]);

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
