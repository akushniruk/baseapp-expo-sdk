import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CandleChart } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const CandleChartMeta: ComponentMeta<typeof CandleChart> = {
    title: "Services/CandleChart",
    component: CandleChart,
};

export default CandleChartMeta;

type CandleChartStory = ComponentStory<typeof CandleChart>;

export const Basic: CandleChartStory = (args) => (
    <CoreProvider>
        <CandleChart />
    </CoreProvider>
);
