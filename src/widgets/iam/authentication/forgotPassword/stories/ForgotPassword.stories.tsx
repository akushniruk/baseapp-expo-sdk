import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ForgotPassword } from "../ui/forgotPassword";
import { CoreProvider } from "../../../../../shared/providers/core";

const ForgotPasswordMeta: ComponentMeta<typeof ForgotPassword> = {
    title: "Widgets/Authentication/ForgotPassword",
    component: ForgotPassword,
};

export default ForgotPasswordMeta;

type ForgotPasswordStory = ComponentStory<typeof ForgotPassword>;

export const Basic: ForgotPasswordStory = (args) => (
    <CoreProvider>
        <ForgotPassword />
    </CoreProvider>
);
