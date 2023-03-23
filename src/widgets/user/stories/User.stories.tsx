import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ProfileWidget } from "../ui/profile";
import { CoreProvider } from "../../../shared/providers/core";

const ProfileWidgetMeta: ComponentMeta<typeof ProfileWidget> = {
    title: "Widgets/Profile",
    component: ProfileWidget,
};

export default ProfileWidgetMeta;

type ProfileWidgetStory = ComponentStory<typeof ProfileWidget>;

export const Basic: ProfileWidgetStory = (args) => (
    <CoreProvider>
        <ProfileWidget />
    </CoreProvider>
);
