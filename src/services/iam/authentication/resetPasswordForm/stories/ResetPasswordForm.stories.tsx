import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ResetPasswordForm } from "../ui/resetPasswordForm";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const ResetPasswordFormMeta: ComponentMeta<typeof ResetPasswordForm> = {
    title: "Services/Authentication/ResetPasswordForm",
    component: ResetPasswordForm,
};

export default ResetPasswordFormMeta;

type ResetPasswordFormStory = ComponentStory<typeof ResetPasswordForm>;

export const Basic: ResetPasswordFormStory = (args) => (
    <ReduxProvider>
        <ResetPasswordForm />
    </ReduxProvider>
);
