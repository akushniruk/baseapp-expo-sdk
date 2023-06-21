import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ConfirmBeneficiary } from "../ui/confirmBeneficiary";
import { CoreProvider } from "../../../shared/providers/core";

const ConfirmBeneficiaryMeta: ComponentMeta<typeof ConfirmBeneficiary> = {
    title: "Services/Withdrawal/ConfirmBeneficiary",
    component: ConfirmBeneficiary,
};

export default ConfirmBeneficiaryMeta;

type ConfirmBeneficiaryStory = ComponentStory<typeof ConfirmBeneficiary>;

export const Basic: ConfirmBeneficiaryStory = (args) => (
    <CoreProvider>
        <ConfirmBeneficiary />
    </CoreProvider>
);
