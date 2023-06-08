import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { WalletDetails } from "../ui/walletDetails";
import { CoreProvider } from "../../..";

const MyButtonMeta: ComponentMeta<typeof WalletDetails> = {
    title: "Services/Wallets/WalletDetails",
    component: WalletDetails,
};

export default MyButtonMeta;

type WalletDetailsStory = ComponentStory<typeof WalletDetails>;

export const Basic: WalletDetailsStory = (args) => (
    <CoreProvider>
        <WalletDetails />
    </CoreProvider>
);
