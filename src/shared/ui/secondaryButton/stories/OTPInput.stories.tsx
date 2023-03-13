import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SecondaryButton } from "..";

const SecondaryButtonMeta: ComponentMeta<typeof SecondaryButton> = {
    title: "Shared/UI/SecondaryButton",
    component: SecondaryButton,
};

export default SecondaryButtonMeta;

type SecondaryButtonStory = ComponentStory<typeof SecondaryButton>;

export const Basic: SecondaryButtonStory = (args) => (
    <SecondaryButton title="default" />
);
