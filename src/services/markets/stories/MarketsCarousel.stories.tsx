import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MarketsCarousel } from "../ui/marketsCarousel";
import { CoreProvider } from "../../..";

const MarketsCarouselMeta: ComponentMeta<typeof MarketsCarousel> = {
    title: "Services/Markets/MarketsCarousel",
    component: MarketsCarousel,
};

export default MarketsCarouselMeta;

type MarketsCarouselStory = ComponentStory<typeof MarketsCarousel>;

export const Basic: MarketsCarouselStory = (args) => (
    <CoreProvider>
        <MarketsCarousel code="btc" />
    </CoreProvider>
);
