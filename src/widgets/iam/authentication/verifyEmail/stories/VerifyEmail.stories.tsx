import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import VerifyEmail from "../ui/verifyEmail";
import { ReduxProvider } from "../../../../../shared/providers/redux/redux";

const VerifyEmailMeta: ComponentMeta<typeof VerifyEmail> = {
    title: "Widgets/Authentication/VerifyEmail",
    component: VerifyEmail,
};

export default VerifyEmailMeta;

type VerifyEmailStory = ComponentStory<typeof VerifyEmail>;

export const Basic: VerifyEmailStory = (args) => (
    <ReduxProvider>
        <VerifyEmail />
    </ReduxProvider>
);
