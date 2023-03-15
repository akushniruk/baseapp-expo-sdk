import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Input } from "..";
import { CoreProvider } from "../../../providers/core";

const InputMeta: ComponentMeta<typeof Input> = {
    title: "Shared/UI/Input",
    component: Input,
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => (
    <CoreProvider>
        <Input label="default" />
    </CoreProvider>
);
