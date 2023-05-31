import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Settings } from "../ui/settings";
import { CoreProvider } from "../../../shared/providers/core";

const SettingsMeta: ComponentMeta<typeof Settings> = {
    title: "Services/Profile/Settings",
    component: Settings,
};

export default SettingsMeta;

type SettingsStory = ComponentStory<typeof Settings>;

export const Basic: SettingsStory = (args) => (
    <CoreProvider>
        <Settings />
    </CoreProvider>
);
