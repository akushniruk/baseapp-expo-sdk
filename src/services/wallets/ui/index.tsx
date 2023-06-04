import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, VirtualizedList, ScrollView } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { walletsStyles } from "./wallets.style";
import { IAccount, IWallet } from "../api/types";
import { Button, Input, useAppSelector } from "../../../shared";
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
    const [hideZeroBalance, setHideZeroBalance] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    useGetAccountsQuery();
    const linkTo = useLinkTo();
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

        // zero balance filter
        const filteredWallets = hideZeroBalance
            ? wallets.filter((wallet: IWallet) => wallet.balance && Number(wallet.balance) > 0)
            : wallets;

        setWallets(filteredWallets);
    }, [accounts, currencies, userProfile, setWallets, hideZeroBalance]);

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
                        <Text style={styles.rowLeftTextCurrency}>{wallet?.currency?.toUpperCase()}</Text>
                        <Text style={styles.rowLeftTextName}>{wallet?.name}</Text>
                    </View>
                </View>
                <View style={styles.rowRight}>
                    <Text style={styles.rowRightBalance}>{wallet.balance}</Text>
                    <Text style={styles.rowRightEstimatedBalance}>
                        ≈{estimatedValueForWallet} {VALUATION_PRIMARY_CURRENCY}
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
        // TODO: store to Redux selected wallet
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

    const handleSearchByNameAndCode = useCallback(
        (text: string) => {
            // TODO: need add reset logic
            const filteredWalletsBySearch = wallets?.filter(
                (wallet: IWallet) =>
                    wallet?.currency?.toLowerCase().includes(search?.toLowerCase()) ||
                    wallet?.name?.toLowerCase().includes(search?.toLowerCase())
            );

            setWallets(filteredWalletsBySearch);
            setSearch(text);
        },
        [setSearch, setWallets, wallets]
    );

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.totalBalance}>
                        Total balance: {estimatedValuePrimary} {VALUATION_PRIMARY_CURRENCY}
                    </Text>
                    <Text style={styles.secondaryTotalBalance}>
                        ≈{estimatedValueSecondary} {VALUATION_SECONDARY_CURRENCY}
                    </Text>
                </View>

                <Text style={styles.historyIcon}>history icon</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Deposit" onPress={() => linkTo("/Deposit")} isLoading={false} />
                <Button title="Withdrawal" onPress={() => linkTo("/Withdrawal")} isLoading={false} />
                <Button title="Transfer" onPress={() => linkTo("/Transfer")} isLoading={false} />
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.title}>Balances</Text>
                <View style={styles.inputWrapper}>
                    <Input
                        onChangeText={handleSearchByNameAndCode}
                        value={search}
                        placeholder={"Search"}
                        label={""}
                        testID={"search"}
                        keyboardType="default"
                    />
                </View>
            </View>
            <Pressable style={styles.hideZero} onPress={() => setHideZeroBalance(!hideZeroBalance)}>
                <Text>{!hideZeroBalance ? "Hide 0 balances" : "Show 0 balances"}</Text>
            </Pressable>
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
