import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SecondaryButton } from "..";
import { CoreProvider } from "../../../providers/core";

const SecondaryButtonMeta: ComponentMeta<typeof SecondaryButton> = {
    title: "Shared/UI/SecondaryButton",
    component: SecondaryButton,
};

export default SecondaryButtonMeta;

type SecondaryButtonStory = ComponentStory<typeof SecondaryButton>;

export const Basic: SecondaryButtonStory = (args) => (
    <CoreProvider>
        <SecondaryButton title="default" />
    </CoreProvider>
);
