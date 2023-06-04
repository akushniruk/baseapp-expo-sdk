import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, VirtualizedList, ScrollView } from "react-native";
import { ArrowRightIcon } from "../../../assets/profile";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { walletsStyles } from "./wallets.style";
import { IAccount, IWallet } from "../api/types";
import { Button, useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
import { useGetAccountsQuery } from "../api/accountApi";
import { Currency } from "../../currencies/model/type";
import { User } from "../../user";
import { CryptoIcon } from "./cryptoIcon";
import { estimateUnitValue, estimateValue } from "../libs/helpers/estimateValue";
import { format } from "../../../shared/libs/format";
import { Market } from "../../markets/model/type";
import { Tickers } from "../../tickers/model/type";

interface IWallets {
    navigation?: any;
}

const VALUATION_PRIMARY_CURRENCY = "BTC";
const VALUATION_SECONDARY_CURRENCY = "USDT";

export const Wallets: FC<IWallets> = ({ navigation }: IWallets) => {
    const [wallets, setWallets] = useState<IWallet[]>([]);

    useGetAccountsQuery();
    const { theme } = useThemeContext();
    const styles = useMemo(() => walletsStyles(theme), [theme]);

    const accounts: IAccount[] | null = useAppSelector((state: RootState) => state.accounts.list);
    const currencies: Currency[] = useAppSelector((state: RootState) => state.currency.list);
    const userProfile: User | null = useAppSelector((state: RootState) => state.user.profile);
    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);
    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    useEffect(() => {
        const accountsByCurrencies = currencies?.map((currency: Currency) => {
            let accountByCurrency = accounts?.find((account: IAccount) => account.currency === currency.id);

            if (currency.status === "hidden" && userProfile?.role !== "admin" && userProfile?.role !== "superadmin") {
                return null;
            }

            if (!accountByCurrency) {
                accountByCurrency = {
                    account_type: "",
                    currency: currency.id,
                };
            }

            return {
                ...accountByCurrency,
                name: currency?.name,
                networks: currency?.networks,
                type: currency?.type,
                fixed: currency?.precision,
                iconUrl: currency?.icon_url,
            };
        });

        const wallets: IWallet | any = accountsByCurrencies.filter((item) => item && item.currency);
        setWallets(wallets);
    }, [accounts, currencies, userProfile, setWallets]);

    const renderWalletRow = useCallback((wallet: IWallet) => {
        const estimatedValueForWallet =
            tickers && wallet.balance
                ? estimateUnitValue(
                      wallet.currency.toUpperCase(),
                      VALUATION_PRIMARY_CURRENCY,
                      +wallet.balance,
                      currencies,
                      markets,
                      tickers
                  )
                : format(0, wallet.fixed);

        return (
            <Pressable key={`${wallet.currency}`} style={styles.row} onPress={() => redirectToWalletDetails(wallet)}>
                <View style={styles.rowLeft}>
                    <CryptoIcon code={wallet.currency} />
                    <View style={styles.rowLeftTextContainer}>
                        <Text style={styles.rowLeftTextName}>{wallet.name}</Text>
                        <Text style={styles.rowLeftTextCurrency}>{wallet.currency}</Text>
                    </View>
                </View>
                <View style={styles.rowRight}>
                    <Text style={styles.rowRightBalance}>{wallet.balance}</Text>
                    <Text style={styles.rowRightEstimatedBalance}>
                        {estimatedValueForWallet} {VALUATION_PRIMARY_CURRENCY}
                    </Text>
                </View>
            </Pressable>
        );
    }, []);

    const getItemCount = (_data: unknown) => wallets?.length;

    const getItem = (_data: unknown, index: number) => {
        return wallets[index];
    };

    const redirectToWalletDetails = (wallet: IWallet) => {
        // TODO: setup navigation for deposit and withdrawal
        navigation?.navigate("WalletDetails", { id: wallet?.currency });
    };

    const estimatedValuePrimary = useMemo(() => {
        return tickers && estimateValue(VALUATION_PRIMARY_CURRENCY, currencies, wallets, markets, tickers);
    }, [currencies, wallets, markets, tickers]);

    const estimatedValueSecondary = useMemo(() => {
        return (
            VALUATION_SECONDARY_CURRENCY &&
            tickers &&
            estimatedValuePrimary &&
            estimateUnitValue(
                VALUATION_SECONDARY_CURRENCY,
                VALUATION_PRIMARY_CURRENCY,
                +estimatedValuePrimary,
                currencies,
                markets,
                tickers
            )
        );
    }, [estimatedValuePrimary, currencies, wallets, markets, tickers]);

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.totalBalance}>
                    Total balance: {estimatedValuePrimary} {VALUATION_PRIMARY_CURRENCY}
                </Text>
                <Text style={styles.secondaryTotalBalance}>
                    ≈{estimatedValueSecondary} {VALUATION_SECONDARY_CURRENCY}
                </Text>
                <Text style={styles.historyIcon}>history icon</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Deposit" isLoading={false} />
                <Button title="Withdraw" isLoading={false} />
                <Button title="Transfer" isLoading={false} />
            </View>
            {/* TODO: replace it with something else. */}
            <VirtualizedList
                initialNumToRender={14}
                renderItem={({ item }) => renderWalletRow(item)}
                keyExtractor={(item) => item.currency}
                getItemCount={getItemCount}
                getItem={getItem}
                maxToRenderPerBatch={14}
                style={styles.listContainer}
            />
        </ScrollView>
    );
};
