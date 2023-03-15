import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { VerifyEmailForm } from "../ui/verifyEmailForm";
import { CoreProvider } from "../../../../../shared/providers/core";

const VerifyEmailFormMeta: ComponentMeta<typeof VerifyEmailForm> = {
    title: "Services/Authentication/VerifyEmailForm",
    component: VerifyEmailForm,
};

export default VerifyEmailFormMeta;

type VerifyEmailFormStory = ComponentStory<typeof VerifyEmailForm>;

export const Basic: VerifyEmailFormStory = (args) => (
    <CoreProvider>
        <VerifyEmailForm />
    </CoreProvider>
);
