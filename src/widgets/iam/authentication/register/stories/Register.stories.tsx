import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Register } from "../ui/register";
import { CoreProvider } from "../../../../../shared/providers/core";

const RegisterMeta: ComponentMeta<typeof Register> = {
    title: "Widgets/Authentication/Register",
    component: Register,
};

export default RegisterMeta;

type RegisterStory = ComponentStory<typeof Register>;

export const Basic: RegisterStory = (args) => (
    <CoreProvider>
        <Register />
    </CoreProvider>
);
