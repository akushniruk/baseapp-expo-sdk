import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import RegisterForm from "../ui/registerForm";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const RegisterFormMeta: ComponentMeta<typeof RegisterForm> = {
    title: "Services/Authentication/RegisterForm",
    component: RegisterForm,
};

export default RegisterFormMeta;

type RegisterFormStory = ComponentStory<typeof RegisterForm>;

export const Basic: RegisterFormStory = (args) => (
    <ReduxProvider>
        <RegisterForm />
    </ReduxProvider>
);
