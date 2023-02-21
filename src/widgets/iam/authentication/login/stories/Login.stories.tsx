import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import Login from "../ui/login";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const LoginMeta: ComponentMeta<typeof Login> = {
    title: "Widgets/Authentication/Login",
    component: Login,
};

export default LoginMeta;

type LoginStory = ComponentStory<typeof Login>;

export const Basic: LoginStory = (args) => (
    <ReduxProvider>
        <Login />
    </ReduxProvider>
);
