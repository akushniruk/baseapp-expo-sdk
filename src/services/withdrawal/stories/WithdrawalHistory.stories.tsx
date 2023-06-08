import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { WithdrawalHistory } from "../ui/withdrawalHistory";
import { CoreProvider } from "../../../shared/providers/core";

const WithdrawalHistoryMeta: ComponentMeta<typeof WithdrawalHistory> = {
    title: "Services/Withdrawal/WithdrawalHistory",
    component: WithdrawalHistory,
};

export default WithdrawalHistoryMeta;

type WithdrawalHistoryStory = ComponentStory<typeof WithdrawalHistory>;

export const Basic: WithdrawalHistoryStory = (args) => (
    <CoreProvider>
        <WithdrawalHistory />
    </CoreProvider>
);
