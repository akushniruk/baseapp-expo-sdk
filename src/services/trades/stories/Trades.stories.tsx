import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Trades } from "../ui/trades";
import { CoreProvider } from "../../..";
import { MarketsV1 } from "../../markets/ui/marketsV1";
import { View } from "react-native";

const MyButtonMeta: ComponentMeta<typeof Trades> = {
    title: "Services/Trades",
    component: Trades,
};

export default MyButtonMeta;

type TradesStory = ComponentStory<typeof Trades>;
export const Basic: TradesStory = (args) => (
    <CoreProvider>
        <View>
            <Trades />
        </View>
        <View>
            <MarketsV1 limit={5} />
        </View>
    </CoreProvider>
);
