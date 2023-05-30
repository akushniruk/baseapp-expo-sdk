import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { TwoFactorAuthForm } from "../ui/security/twoFactorAuthForm";
import { CoreProvider } from "../../../shared/providers/core";

const TwoFactorAuthFormMeta: ComponentMeta<typeof TwoFactorAuthForm> = {
    title: "Services/Profile/TwoFactorAuthForm",
    component: TwoFactorAuthForm,
};

export default TwoFactorAuthFormMeta;

type TwoFactorAuthFormStory = ComponentStory<typeof TwoFactorAuthForm>;

export const Basic: TwoFactorAuthFormStory = (args) => (
    <CoreProvider>
        <TwoFactorAuthForm />
    </CoreProvider>
);
