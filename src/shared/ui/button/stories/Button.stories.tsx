import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "..";

const ButtonMeta: ComponentMeta<typeof Button> = {
    title: "Shared/UI/Button",
    component: Button,
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = (args) => (
    <Button title="default" isLoading={false} />
);
