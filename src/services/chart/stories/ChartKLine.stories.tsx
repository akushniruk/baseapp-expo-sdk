import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ChartKLine } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const ChartKLineMeta: ComponentMeta<typeof ChartKLine> = {
    title: "Services/ChartKLine",
    component: ChartKLine,
};

export default ChartKLineMeta;

type ChartKLineStory = ComponentStory<typeof ChartKLine>;

export const Basic: ChartKLineStory = (args) => (
    <CoreProvider>
        <ChartKLine />
    </CoreProvider>
);
