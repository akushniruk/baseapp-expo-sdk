import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysActivate2FA } from "../ui/apiKeysActivate2FA";
import { CoreProvider } from "../../../shared/providers/core";

const ApiKeysActivate2FAMeta: ComponentMeta<typeof ApiKeysActivate2FA> = {
    title: "Services/ApiKeys/Activate2FA",
    component: ApiKeysActivate2FA,
};

export default ApiKeysActivate2FAMeta;

type ApiKeysActivate2FAStory = ComponentStory<typeof ApiKeysActivate2FA>;

export const Basic: ApiKeysActivate2FAStory = (args) => (
    <CoreProvider>
        <ApiKeysActivate2FA />
    </CoreProvider>
);
