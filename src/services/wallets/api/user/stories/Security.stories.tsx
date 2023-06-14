import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Security } from "../ui/security";
import { CoreProvider } from "../../../../../shared/providers/core";

const SecurityMeta: ComponentMeta<typeof Security> = {
    title: "Services/Profile/Security",
    component: Security,
};

export default SecurityMeta;

type SecurityStory = ComponentStory<typeof Security>;

export const Basic: SecurityStory = (args) => (
    <CoreProvider>
        <Security />
    </CoreProvider>
);
