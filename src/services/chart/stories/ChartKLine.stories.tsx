import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { LineChartKline } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const LineChartKlineMeta: ComponentMeta<typeof LineChartKline> = {
    title: "Services/LineChartKline",
    component: LineChartKline,
};

export default LineChartKlineMeta;

type LineChartKlineStory = ComponentStory<typeof LineChartKline>;

export const Basic: LineChartKlineStory = (args) => (
    <CoreProvider>
        <LineChartKline />
    </CoreProvider>
);
