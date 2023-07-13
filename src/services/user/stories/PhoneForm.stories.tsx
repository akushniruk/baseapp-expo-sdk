import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { PhoneForm } from "../ui/verificationCenter/phone";
import { CoreProvider } from "../../../shared/providers/core";

const PhoneFormMeta: ComponentMeta<typeof PhoneForm> = {
    title: "Services/Profile/VerificationCenter/PhoneForm",
    component: PhoneForm,
};

export default PhoneFormMeta;

type PhoneFormStory = ComponentStory<typeof PhoneForm>;

export const Basic: PhoneFormStory = (args) => (
    <CoreProvider>
        <PhoneForm />
    </CoreProvider>
);
