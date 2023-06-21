import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Activate2FA } from "../ui";
import { CoreProvider } from "../../../providers/core";

const Activate2FAMeta: ComponentMeta<typeof Activate2FA> = {
    title: "Services/Activate2FA",
    component: Activate2FA,
};

export default Activate2FAMeta;

type Activate2FAStory = ComponentStory<typeof Activate2FA>;

export const Basic: Activate2FAStory = (args) => (
    <CoreProvider>
        <Activate2FA />
    </CoreProvider>
);
