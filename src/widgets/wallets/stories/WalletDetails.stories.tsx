import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { WalletDetailsWidget } from "../ui/walletDetails";
import { CoreProvider } from "../../../shared/providers/core";

const WalletDetailsWidgetMeta: ComponentMeta<typeof WalletDetailsWidget> = {
    title: "Widgets/Wallets/WalletDetailsWidget",
    component: WalletDetailsWidget,
};

export default WalletDetailsWidgetMeta;

type WalletDetailsWidgetStory = ComponentStory<typeof WalletDetailsWidget>;

export const Basic: WalletDetailsWidgetStory = (args) => (
    <CoreProvider>
        <WalletDetailsWidget />
    </CoreProvider>
);
