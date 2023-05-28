import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { AccountActivity } from "../ui";
import { CoreProvider } from "../../../shared/providers/core";

const AccountActivityMeta: ComponentMeta<typeof AccountActivity> = {
    title: "Services/AccountActivity",
    component: AccountActivity,
};

export default AccountActivityMeta;

type AccountActivityStory = ComponentStory<typeof AccountActivity>;

export const Basic: AccountActivityStory = (args) => (
    <CoreProvider>
        <AccountActivity />
    </CoreProvider>
);
