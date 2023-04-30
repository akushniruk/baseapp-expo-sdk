import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrderBookTable } from "../ui/orderbook";
import { CoreProvider } from "../../..";
import { accumulateVolume } from "../libs/calculateOrderBookMaxVolume";

const MyButtonMeta: ComponentMeta<typeof OrderBookTable> = {
    title: "Services/OrderBookTable/asks",
    component: OrderBookTable,
};

export default MyButtonMeta;

type OrderBookTableStory = ComponentStory<typeof OrderBookTable>;

const asks = [
    ["15.0", "1.702166810435176"],
    ["20.0", "80.20216681043517"],
    ["20.5", "10.202166810435177"],
    ["30.0", "1.202166810435176"],
];

const orderBookEntry = () => accumulateVolume(asks || []);

export const Basic: OrderBookTableStory = (args) => (
    <CoreProvider>
        <OrderBookTable data={asks} maxVolume={100} orderBookEntry={orderBookEntry()} side="ask" />
    </CoreProvider>
);
