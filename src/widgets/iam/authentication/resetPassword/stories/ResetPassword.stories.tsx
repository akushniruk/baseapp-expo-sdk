import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ResetPassword } from "../ui/resetPassword";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const ResetPasswordMeta: ComponentMeta<typeof ResetPassword> = {
    title: "Widgets/Authentication/ResetPassword",
    component: ResetPassword,
};

export default ResetPasswordMeta;

type ResetPasswordStory = ComponentStory<typeof ResetPassword>;

export const Basic: ResetPasswordStory = (args) => (
    <ReduxProvider>
        <ResetPassword />
    </ReduxProvider>
);
