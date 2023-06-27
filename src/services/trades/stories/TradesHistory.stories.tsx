import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { TradesHistory } from "../ui/history/tradesHistory";
import { CoreProvider } from "../../..";

const TradesHistoryMeta: ComponentMeta<typeof TradesHistory> = {
    title: "Services/TradesHistory/History",
    component: TradesHistory,
};

export default TradesHistoryMeta;

type TradesHistoryStory = ComponentStory<typeof TradesHistory>;
export const Basic: TradesHistoryStory = (args) => (
    <CoreProvider>
        <TradesHistory />
    </CoreProvider>
);
