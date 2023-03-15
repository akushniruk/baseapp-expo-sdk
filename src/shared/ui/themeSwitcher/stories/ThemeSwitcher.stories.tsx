import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ThemeSwitcher } from "../";
import { ThemeProvider } from "../../../providers/theme";

const ThemeSwitcherMeta: ComponentMeta<typeof ThemeSwitcher> = {
    title: "Shared/UI/ThemeSwitcher",
    component: ThemeSwitcher,
};

export default ThemeSwitcherMeta;

type ThemeSwitcherStory = ComponentStory<typeof ThemeSwitcher>;

export const Basic: ThemeSwitcherStory = (args) => (
    <ThemeProvider>
        <ThemeSwitcher />
    </ThemeProvider>
);
