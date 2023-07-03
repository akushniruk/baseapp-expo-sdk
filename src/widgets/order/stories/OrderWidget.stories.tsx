import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrderWidget } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const OrderWidgetMeta: ComponentMeta<typeof OrderWidget> = {
    title: "Widgets/Order/OrderWidget",
    component: OrderWidget,
};

export default OrderWidgetMeta;

type OrderWidgetStory = ComponentStory<typeof OrderWidget>;

export const Basic: OrderWidgetStory = (args) => (
    <CoreProvider>
        <OrderWidget />
    </CoreProvider>
);
