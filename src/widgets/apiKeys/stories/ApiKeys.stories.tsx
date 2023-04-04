import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ApiKeysWidget } from "../ui/apiKeys";
import { CoreProvider } from "../../../shared/providers/core";

const ApiKeysWidgetMeta: ComponentMeta<typeof ApiKeysWidget> = {
    title: "Widgets/ApiKeys",
    component: ApiKeysWidget,
};

export default ApiKeysWidgetMeta;

type ApiKeysWidgetStory = ComponentStory<typeof ApiKeysWidget>;

export const Basic: ApiKeysWidgetStory = (args) => (
    <CoreProvider>
        <ApiKeysWidget />
    </CoreProvider>
);
