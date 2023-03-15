import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { AlertComponent } from "../alertComponent";
import { CoreProvider } from "../../../../providers/core";

const AlertComponentMeta: ComponentMeta<typeof AlertComponent> = {
    title: "Shared/UI/Alert",
    component: AlertComponent,
};

export default AlertComponentMeta;

type AlertComponentStory = ComponentStory<typeof AlertComponent>;

export const Success: AlertComponentStory = (args) => (
    <CoreProvider>
        <AlertComponent
            type="success"
            messageType="success"
            messageText="Lorem Ipsum"
            alertDisplayTime="2000000"
            onClose={() => {}}
        />
    </CoreProvider>
);

export const Error: AlertComponentStory = (args) => (
    <CoreProvider>
        <AlertComponent
            type="error"
            messageType="error"
            messageText="Lorem Ipsum"
            alertDisplayTime="2000000"
            onClose={() => {}}
        />
    </CoreProvider>
);

export const Info: AlertComponentStory = (args) => (
    <CoreProvider>
        <AlertComponent
            type="info"
            messageType="info"
            messageText="Lorem Ipsum"
            alertDisplayTime="2000000"
            onClose={() => {}}
        />
    </CoreProvider>
);

export const Warning: AlertComponentStory = (args) => (
    <CoreProvider>
        <AlertComponent
            type="warn"
            messageType="warning"
            messageText="Lorem Ipsum"
            alertDisplayTime="2000000"
            onClose={() => {}}
        />
    </CoreProvider>
);
