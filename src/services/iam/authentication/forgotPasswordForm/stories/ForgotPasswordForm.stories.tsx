import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import ForgotPasswordForm from "../ui/forgotPasswordForm";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const ForgotPasswordFormMeta: ComponentMeta<typeof ForgotPasswordForm> = {
    title: "Services/Authentication/ForgotPasswordForm",
    component: ForgotPasswordForm,
};

export default ForgotPasswordFormMeta;

type ForgotPasswordFormStory = ComponentStory<typeof ForgotPasswordForm>;

export const Basic: ForgotPasswordFormStory = (args) => (
    <ReduxProvider>
        <ForgotPasswordForm />
    </ReduxProvider>
);
