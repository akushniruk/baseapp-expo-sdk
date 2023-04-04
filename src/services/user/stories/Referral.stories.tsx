import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Referral } from "../ui/referral";
import { CoreProvider } from "../../../shared/providers/core";

const ReferralMeta: ComponentMeta<typeof Referral> = {
    title: "Services/Profile/Referral",
    component: Referral,
};

export default ReferralMeta;

type ReferralStory = ComponentStory<typeof Referral>;

export const Basic: ReferralStory = (args) => (
    <CoreProvider>
        <Referral />
    </CoreProvider>
);
