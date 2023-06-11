import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CreateCryptoBeneficiary } from "../ui/createCryptoBeneficiary";
import { CoreProvider } from "../../../shared/providers/core";

const CreateCryptoBeneficiaryMeta: ComponentMeta<typeof CreateCryptoBeneficiary> = {
    title: "Services/Withdrawal/CreateCryptoBeneficiary",
    component: CreateCryptoBeneficiary,
};

export default CreateCryptoBeneficiaryMeta;

type CreateCryptoBeneficiaryStory = ComponentStory<typeof CreateCryptoBeneficiary>;

export const Basic: CreateCryptoBeneficiaryStory = (args) => (
    <CoreProvider>
        <CreateCryptoBeneficiary />
    </CoreProvider>
);
