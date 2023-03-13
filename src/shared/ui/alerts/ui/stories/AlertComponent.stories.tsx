import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { AlertComponent } from "../alertComponent";

const AlertComponentMeta: ComponentMeta<typeof AlertComponent> = {
    title: "Shared/UI/Alert",
    component: AlertComponent,
};

export default AlertComponentMeta;

type AlertComponentStory = ComponentStory<typeof AlertComponent>;

export const Success: AlertComponentStory = (args) => (
    <AlertComponent
        type="success"
        messageType="success"
        messageText="Lorem Ipsum"
        alertDisplayTime="2000000"
        onClose={() => {}}
    />
);

export const Error: AlertComponentStory = (args) => (
    <AlertComponent
        type="error"
        messageType="error"
        messageText="Lorem Ipsum"
        alertDisplayTime="2000000"
        onClose={() => {}}
    />
);

export const Info: AlertComponentStory = (args) => (
    <AlertComponent
        type="info"
        messageType="info"
        messageText="Lorem Ipsum"
        alertDisplayTime="2000000"
        onClose={() => {}}
    />
);

export const Warning: AlertComponentStory = (args) => (
    <AlertComponent
        type="warn"
        messageType="warning"
        messageText="Lorem Ipsum"
        alertDisplayTime="2000000"
        onClose={() => {}}
    />
);
