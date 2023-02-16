import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import Markets from "../ui/Markets";
import { ReduxProvider } from "../../../shared/providers/redux/redux";

const MyButtonMeta: ComponentMeta<typeof Markets> = {
    title: "Markets",
    component: Markets,
};

export default MyButtonMeta;

type MarketsStory = ComponentStory<typeof Markets>;

export const Basic: MarketsStory = (args) => (
    <ReduxProvider>
        <Markets />
    </ReduxProvider>
);
