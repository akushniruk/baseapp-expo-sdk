import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import VerifyEmailForm from "../ui/verifyEmailForm";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const VerifyEmailFormMeta: ComponentMeta<typeof VerifyEmailForm> = {
    title: "VerifyEmailForm",
    component: VerifyEmailForm,
};

export default VerifyEmailFormMeta;

type VerifyEmailFormStory = ComponentStory<typeof VerifyEmailForm>;

export const Basic: VerifyEmailFormStory = (args) => (
    <ReduxProvider>
        <VerifyEmailForm />
    </ReduxProvider>
);
