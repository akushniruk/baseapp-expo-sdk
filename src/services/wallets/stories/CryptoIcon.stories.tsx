import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CryptoIcon } from "../ui/cryptoIcon";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof CryptoIcon> = {
    title: "Services/CryptoIcon",
    component: CryptoIcon,
};

export default MyButtonMeta;

type CryptoIconStory = ComponentStory<typeof CryptoIcon>;

export const Basic: CryptoIconStory = (args) => (
    <CoreProvider>
        <CryptoIcon code="usdt" />
    </CoreProvider>
);
