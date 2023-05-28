import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ChangePasswordForm } from "../ui/changePasswordForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const ChangePasswordFormMeta: ComponentMeta<typeof ChangePasswordForm> = {
    title: "Services/Authentication/ChangePasswordForm",
    component: ChangePasswordForm,
};

export default ChangePasswordFormMeta;

type ChangePasswordFormStory = ComponentStory<typeof ChangePasswordForm>;

export const Basic: ChangePasswordFormStory = (args) => (
    <CoreProvider>
        <ChangePasswordForm />
    </CoreProvider>
);
