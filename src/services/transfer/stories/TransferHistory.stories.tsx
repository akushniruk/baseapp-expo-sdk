import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { TransferHistory } from "../ui/transferHistory";
import { CoreProvider } from "../../../shared/providers/core";

const TransferHistoryMeta: ComponentMeta<typeof TransferHistory> = {
    title: "Services/Transfer/TransferHistory",
    component: TransferHistory,
};

export default TransferHistoryMeta;

type TransferHistoryStory = ComponentStory<typeof TransferHistory>;

export const Basic: TransferHistoryStory = (args) => (
    <CoreProvider>
        <TransferHistory />
    </CoreProvider>
);
