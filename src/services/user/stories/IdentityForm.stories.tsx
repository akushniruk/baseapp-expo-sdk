import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IdentityForm } from "../ui/verificationCenter/identity";
import { CoreProvider } from "../../../shared/providers/core";

const IdentityFormMeta: ComponentMeta<typeof IdentityForm> = {
    title: "Services/Profile/VerificationCenter/IdentityForm",
    component: IdentityForm,
};

export default IdentityFormMeta;

type IdentityFormStory = ComponentStory<typeof IdentityForm>;

export const Basic: IdentityFormStory = (args) => (
    <CoreProvider>
        <IdentityForm />
    </CoreProvider>
);
