import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import LoginForm from "../ui/loginForm";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const LoginFormMeta: ComponentMeta<typeof LoginForm> = {
    title: "LoginForm",
    component: LoginForm,
};

export default LoginFormMeta;

type LoginFormStory = ComponentStory<typeof LoginForm>;

export const Basic: LoginFormStory = (args) => (
    <ReduxProvider>
        <LoginForm />
    </ReduxProvider>
);
