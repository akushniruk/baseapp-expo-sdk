import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Help } from "../ui/help";
import { CoreProvider } from "../../../../../shared/providers/core";

const HelpMeta: ComponentMeta<typeof Help> = {
    title: "Services/Profile/Help",
    component: Help,
};

export default HelpMeta;

type HelpStory = ComponentStory<typeof Help>;

export const Basic: HelpStory = (args) => (
    <CoreProvider>
        <Help />
    </CoreProvider>
);
