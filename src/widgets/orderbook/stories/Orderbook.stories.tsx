import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrderbookWidget } from "../ui/orderbook";
import { CoreProvider } from "../../../shared/providers/core";
import { MarketsV1 } from "../../../services/markets/ui/marketsV1";

const OrderbookWidgetMeta: ComponentMeta<typeof OrderbookWidget> = {
    title: "Widgets/Orderbook",
    component: OrderbookWidget,
};

export default OrderbookWidgetMeta;

type OrderbookWidgetStory = ComponentStory<typeof OrderbookWidget>;

export const Basic: OrderbookWidgetStory = (args) => (
    <CoreProvider>
        <OrderbookWidget />
    </CoreProvider>
);
