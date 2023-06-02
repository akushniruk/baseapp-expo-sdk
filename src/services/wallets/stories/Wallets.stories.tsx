import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Wallets } from "../ui";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof Wallets> = {
    title: "Services/Wallets",
    component: Wallets,
};

export default MyButtonMeta;

type WalletsStory = ComponentStory<typeof Wallets>;

export const Basic: WalletsStory = (args) => (
    <CoreProvider>
        <Wallets />
    </CoreProvider>
);
