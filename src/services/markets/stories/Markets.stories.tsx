import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MarketsV1 } from "../ui/marketsV1";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof MarketsV1> = {
    title: "Services/Markets/V1",
    component: MarketsV1,
};

export default MyButtonMeta;

type MarketsV1Story = ComponentStory<typeof MarketsV1>;

export const Basic: MarketsV1Story = (args) => (
    <CoreProvider>
        <MarketsV1 limit={5} />
    </CoreProvider>
);
