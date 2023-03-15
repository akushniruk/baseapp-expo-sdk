import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { RegisterForm } from "../ui/registerForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const RegisterFormMeta: ComponentMeta<typeof RegisterForm> = {
    title: "Services/Authentication/RegisterForm",
    component: RegisterForm,
};

export default RegisterFormMeta;

type RegisterFormStory = ComponentStory<typeof RegisterForm>;

export const Basic: RegisterFormStory = (args) => (
    <CoreProvider>
        <RegisterForm />
    </CoreProvider>
);
