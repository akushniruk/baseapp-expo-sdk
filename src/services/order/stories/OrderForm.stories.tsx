import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrderForm } from "../ui/form";
import { CoreProvider, MarketsV1 } from "../../..";

const MyButtonMeta: ComponentMeta<typeof OrderForm> = {
    title: "Services/Order/Order",
    component: OrderForm,
};

export default MyButtonMeta;

type OrderFormStory = ComponentStory<typeof OrderForm>;

export const Basic: OrderFormStory = (args) => (
    <CoreProvider>
        <OrderForm orderType="limit" setIsOpenOrderTypeSelector={() => console.log("open")} />
        <MarketsV1 limit={5} />
    </CoreProvider>
);
