import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MarketsV1Widget } from "../ui/marketsV1";
import { CoreProvider } from "../../../shared/providers/core";

const MarketsV1WidgetMeta: ComponentMeta<typeof MarketsV1Widget> = {
    title: "Widgets/Markets/MarketsWidgetV1",
    component: MarketsV1Widget,
};

export default MarketsV1WidgetMeta;

type MarketsV1WidgetStory = ComponentStory<typeof MarketsV1Widget>;

export const Basic: MarketsV1WidgetStory = (args) => (
    <CoreProvider>
        <MarketsV1Widget />
    </CoreProvider>
);
