import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Withdrawal } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const WithdrawalMeta: ComponentMeta<typeof Withdrawal> = {
    title: "Services/Withdrawal",
    component: Withdrawal,
};

export default WithdrawalMeta;

type WithdrawalStory = ComponentStory<typeof Withdrawal>;

export const Basic: WithdrawalStory = (args) => (
    <CoreProvider>
        <Withdrawal />
    </CoreProvider>
);
