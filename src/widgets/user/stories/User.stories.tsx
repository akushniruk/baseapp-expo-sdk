import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { User } from "../ui/user";
import { CoreProvider } from "../../../shared/providers/core";

const UserMeta: ComponentMeta<typeof User> = {
    title: "Widgets/User",
    component: User,
};

export default UserMeta;

type UserStory = ComponentStory<typeof User>;

export const Basic: UserStory = (args) => (
    <CoreProvider>
        <User />
    </CoreProvider>
);
