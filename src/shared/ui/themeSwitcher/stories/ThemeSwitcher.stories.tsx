import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ThemeSwitcher } from "../";

const ThemeSwitcherMeta: ComponentMeta<typeof ThemeSwitcher> = {
    title: "Shared/UI/ThemeSwitcher",
    component: ThemeSwitcher,
};

export default ThemeSwitcherMeta;

type ThemeSwitcherStory = ComponentStory<typeof ThemeSwitcher>;

export const Basic: ThemeSwitcherStory = (args) => <ThemeSwitcher />;
