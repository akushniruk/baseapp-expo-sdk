import React, { FC, useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SceneRendererProps } from "react-native-tab-view";
import { DepositHistory } from "../../../../services/deposit/ui/depositHistory";
import { Market } from "../../../../services/markets/model/type";
import { MarketsCarousel } from "../../../../services/markets/ui/marketsCarousel";
import { TransferHistory } from "../../../../services/transfer/ui/transferHistory";
import { IWallet } from "../../../../services/wallets/api/types";
import { WalletDetails } from "../../../../services/wallets/ui/walletDetails";
import { WithdrawalHistory } from "../../../../services/withdrawal/ui/withdrawalHistory";
import { IRoute, TabPanel, useAppSelector } from "../../../../shared";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { walletDetailsStyles } from "./walletDetails.styles";

const renderScene = (props: SceneRendererProps & { route: any }, currency: string) => {
    switch (props.route.key) {
        case "deposit":
            return <DepositHistory currency={currency} />;
        case "withdrawal":
            return <WithdrawalHistory currency={currency} />;
        case "transfer":
            return <TransferHistory currency={currency} />;
        default:
            return null;
    }
};

export const WalletDetailsWidget: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => walletDetailsStyles(theme), [theme]);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [routes] = useState<IRoute[]>([
        { key: "deposit", title: "Deposit" },
        { key: "withdrawal", title: "Withdrawal" },
        { key: "transfer", title: "Transfer" },
    ]);

    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);
    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);

    return (
        <View style={styles.container}>
            <WalletDetails />
            <View style={styles.marketsContainer}>
                <View style={styles.marketsHeaderContainer}>
                    <Text style={styles.marketsText}>Spot</Text>
                    <Pressable>
                        <Text style={styles.marketsMore}>More</Text>
                    </Pressable>
                </View>
                {wallet?.currency && markets?.length ? <MarketsCarousel code={wallet.currency} /> : null}
            </View>
            <View style={styles.historyContainer}>
                <View style={styles.historyHeaderContainer}>
                    <Text style={styles.historyText}>History</Text>
                    <Pressable>
                        <Text style={styles.historyMore}>More</Text>
                    </Pressable>
                </View>
                <TabPanel
                    currentTabIndex={tabIndex}
                    renderScene={(props: SceneRendererProps & { route: any }) =>
                        renderScene(props, wallet?.currency || "")
                    }
                    routes={routes}
                    onCurrentTabChange={setTabIndex}
                />
            </View>
        </View>
    );
};
