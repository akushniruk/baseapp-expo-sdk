import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Beneficiaries } from "../ui/beneficiaries";
import { CoreProvider } from "../../../shared/providers/core";

const BeneficiariesMeta: ComponentMeta<typeof Beneficiaries> = {
    title: "Services/Withdrawal/Beneficiaries",
    component: Beneficiaries,
};

export default BeneficiariesMeta;

type BeneficiariesStory = ComponentStory<typeof Beneficiaries>;

export const Basic: BeneficiariesStory = (args) => (
    <CoreProvider>
        <Beneficiaries />
    </CoreProvider>
);
