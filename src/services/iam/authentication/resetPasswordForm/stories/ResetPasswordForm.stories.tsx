import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ResetPasswordForm } from "../ui/resetPasswordForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const ResetPasswordFormMeta: ComponentMeta<typeof ResetPasswordForm> = {
    title: "Services/Authentication/ResetPasswordForm",
    component: ResetPasswordForm,
};

export default ResetPasswordFormMeta;

type ResetPasswordFormStory = ComponentStory<typeof ResetPasswordForm>;

export const Basic: ResetPasswordFormStory = (args) => (
    <CoreProvider>
        <ResetPasswordForm />
    </CoreProvider>
);
