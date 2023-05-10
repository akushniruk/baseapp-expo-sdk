import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { InputV2 } from "../inputV2";
import { CoreProvider } from "../../../providers/core";

const InputV2Meta: ComponentMeta<typeof InputV2> = {
    title: "Shared/UI/InputV2",
    component: InputV2,
};

export default InputV2Meta;

type InputV2Story = ComponentStory<typeof InputV2>;

export const Basic: InputV2Story = (args) => (
    <CoreProvider>
        <InputV2 label="default" symbol="USDT" />
    </CoreProvider>
);
