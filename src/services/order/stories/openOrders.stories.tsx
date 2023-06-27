import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrdersHistory } from "../ui/history/ordersHistory";
import { CoreProvider } from "../../..";

const OrdersHistorysMeta: ComponentMeta<typeof OrdersHistory> = {
    title: "Services/Order/OrdersHistory",
    component: OrdersHistory,
};

export default OrdersHistorysMeta;

type OrdersHistoryStory = ComponentStory<typeof OrdersHistory>;

export const Basic: OrdersHistoryStory = (args) => (
    <CoreProvider>
        <OrdersHistory type="all" />
    </CoreProvider>
);
