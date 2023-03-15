import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { LoginForm } from "../ui/loginForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const LoginFormMeta: ComponentMeta<typeof LoginForm> = {
    title: "Services/Authentication/LoginForm",
    component: LoginForm,
};

export default LoginFormMeta;

type LoginFormStory = ComponentStory<typeof LoginForm>;

export const Basic: LoginFormStory = (args) => (
    <CoreProvider>
        <LoginForm />
    </CoreProvider>
);
