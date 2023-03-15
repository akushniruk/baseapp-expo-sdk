import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "..";
import { CoreProvider } from "../../../providers/core";

const ButtonMeta: ComponentMeta<typeof Button> = {
    title: "Shared/UI/Button",
    component: Button,
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = (args) => (
    <CoreProvider>
        <Button title="default" isLoading={false} />
    </CoreProvider>
);
