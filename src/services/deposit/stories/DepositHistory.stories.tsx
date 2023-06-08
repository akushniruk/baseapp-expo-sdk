import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { DepositHistory } from "../ui/depositHistory";
import { CoreProvider } from "../../../shared/providers/core";

const DepositHistoryMeta: ComponentMeta<typeof DepositHistory> = {
    title: "Services/Deposit/DepositHistory",
    component: DepositHistory,
};

export default DepositHistoryMeta;

type DepositHistoryStory = ComponentStory<typeof DepositHistory>;

export const Basic: DepositHistoryStory = (args) => (
    <CoreProvider>
        <DepositHistory />
    </CoreProvider>
);
