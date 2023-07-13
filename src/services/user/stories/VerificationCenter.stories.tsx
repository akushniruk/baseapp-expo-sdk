import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { VerificationCenter } from "../ui/verificationCenter";
import { CoreProvider } from "../../../shared/providers/core";

const VerificationCenterMeta: ComponentMeta<typeof VerificationCenter> = {
    title: "Services/Profile/VerificationCenter",
    component: VerificationCenter,
};

export default VerificationCenterMeta;

type VerificationCenterStory = ComponentStory<typeof VerificationCenter>;

export const Basic: VerificationCenterStory = (args) => (
    <CoreProvider>
        <VerificationCenter />
    </CoreProvider>
);
