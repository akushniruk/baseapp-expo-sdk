import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrdersHistoryWidget } from "../ui/history";
import { CoreProvider } from "../../../shared/providers/core";

const OrdersHistoryWidgetMeta: ComponentMeta<typeof OrdersHistoryWidget> = {
    title: "Widgets/Order/OrdersHistoryWidget",
    component: OrdersHistoryWidget,
};

export default OrdersHistoryWidgetMeta;

type OrdersHistoryWidgetStory = ComponentStory<typeof OrdersHistoryWidget>;

export const Basic: OrdersHistoryWidgetStory = (args) => (
    <CoreProvider>
        <OrdersHistoryWidget />
    </CoreProvider>
);
