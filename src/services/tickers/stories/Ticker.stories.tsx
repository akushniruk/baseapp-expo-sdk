import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { TickerV1 } from "../ui/ticker";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof TickerV1> = {
    title: "Services/Tickers/V1",
    component: TickerV1,
};

export default MyButtonMeta;

type TickerV1Story = ComponentStory<typeof TickerV1>;

export const Basic: TickerV1Story = (args) => (
    <CoreProvider>
        <TickerV1 marketId="btczar" />
    </CoreProvider>
);
