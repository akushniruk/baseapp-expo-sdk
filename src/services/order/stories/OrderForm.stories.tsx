import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { OrderForm } from "../ui/form";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof OrderForm> = {
    title: "Services/OrderForm",
    component: OrderForm,
};

export default MyButtonMeta;

type OrderFormStory = ComponentStory<typeof OrderForm>;

export const Basic: OrderFormStory = (args) => (
    <CoreProvider>
        <OrderForm marketId="btczar" />
    </CoreProvider>
);
