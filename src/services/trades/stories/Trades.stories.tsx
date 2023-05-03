import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Trades } from "../ui/trades";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof Trades> = {
    title: "Services/Trades",
    component: Trades,
};

export default MyButtonMeta;

type TradesStory = ComponentStory<typeof Trades>;
export const Basic: TradesStory = (args) => (
    <CoreProvider>
        <Trades />
    </CoreProvider>
);
