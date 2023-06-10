import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Deposit } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const DepositMeta: ComponentMeta<typeof Deposit> = {
    title: "Services/Deposit/Deposit",
    component: Deposit,
};

export default DepositMeta;

type DepositStory = ComponentStory<typeof Deposit>;

export const Basic: DepositStory = (args) => (
    <CoreProvider>
        <Deposit />
    </CoreProvider>
);
