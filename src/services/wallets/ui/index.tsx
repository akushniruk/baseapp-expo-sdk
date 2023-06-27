import { useLinkTo } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Pressable, VirtualizedList, ScrollView } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { walletsStyles } from "./wallets.style";
import { IAccount, IWallet } from "../api/types";
import { Button, Input, useAppDispatch, useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
import { useGetAccountsQuery } from "../api/accountApi";
import { Currency } from "../../currencies/model/type";
import { User } from "../../user";
import { CryptoIcon } from "./cryptoIcon";
import { estimateUnitValue, estimateValue } from "../libs/helpers/estimateValue";
import { format } from "../../../shared/libs/format";
import { Market } from "../../markets/model/type";
import { Tickers } from "../../tickers/model/type";
import { setCurrentWallet, wallet } from "../model/walletSlice";
import { SearchIcon } from "../../../assets/system/search";
import { HistoryIcon } from "../../../assets/system/history";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { NoDataIcon } from "../../../assets/system/noDataIcon";

interface IWallets {
    navigation?: any;
}

const VALUATION_PRIMARY_CURRENCY = "USDT";
const VALUATION_SECONDARY_CURRENCY = "BTC";

export const Wallets: FC<IWallets> = ({ navigation }: IWallets) => {
    const dispatch = useAppDispatch();

    const [wallets, setWallets] = useState<IWallet[]>([]);
    const [hideZeroBalance, setHideZeroBalance] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

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

        let walletsBySearch;

        if (search) {
            walletsBySearch = filteredWallets?.filter(
                (wallet: IWallet) =>
                    wallet?.currency?.toLowerCase().includes(search?.toLowerCase()) ||
                    wallet?.name?.toLowerCase().includes(search?.toLowerCase())
            );
        }
        const newWallets = walletsBySearch ? walletsBySearch : filteredWallets;

        setWallets(newWallets);
    }, [accounts, currencies, userProfile, setWallets, search, hideZeroBalance]);

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
                    <Text style={styles.rowRightBalance}>{format(wallet.balance, wallet.fixed)}</Text>
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
        dispatch(setCurrentWallet(wallet));
        linkTo("/WalletDetails");
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
            const filteredWalletsBySearch = wallets?.filter(
                (wallet: IWallet) =>
                    wallet?.currency?.toLowerCase().includes(search?.toLowerCase()) ||
                    wallet?.name?.toLowerCase().includes(search?.toLowerCase())
            );

            setSearch(text);
            return filteredWalletsBySearch;
        },
        [setSearch, setWallets, wallets]
    );

    const renderWallets = () => {
        {
            /* TODO: replace it with something else. */
        }
        return (
            <VirtualizedList
                initialNumToRender={14}
                renderItem={({ item }) => renderWalletRow(item)}
                keyExtractor={(item) => item.currency}
                getItemCount={getItemCount}
                getItem={getItem}
                maxToRenderPerBatch={14}
                style={styles.listContainer}
            />
        );
    };

    const returnNoData = () => {
        return (
            <View style={styles.noData}>
                <NoDataIcon />
                <Text style={styles.noDataText}>There is no data to show</Text>
            </View>
        );
    };

    // TODO: REFACTOR
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View onStartShouldSetResponder={() => true}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.totalBalance}>
                            Total balance: {estimatedValuePrimary} {VALUATION_PRIMARY_CURRENCY}
                        </Text>
                        <Text style={styles.secondaryTotalBalance}>
                            ≈{estimatedValueSecondary} {VALUATION_SECONDARY_CURRENCY}
                        </Text>
                    </View>

                    <Pressable onPress={() => linkTo("/History")} style={styles.historyIcon}>
                        <HistoryIcon />
                    </Pressable>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title="Deposit" onPress={() => linkTo("/DepositCurrencyList")} isLoading={false} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Withdrawal"
                            onPress={() => linkTo("/WithdrawalCurrencyList")}
                            isLoading={false}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Transfer" onPress={() => linkTo("/Transfer")} isLoading={false} />
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Text style={styles.title}>Balances</Text>
                    <View style={styles.searchWrapper}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.searchIcon,
                                {
                                    backgroundColor: pressed
                                        ? styles.searchIconPressed.backgroundColor
                                        : isOpenSearch
                                        ? styles.searchIconActive.backgroundColor
                                        : styles.searchIcon.backgroundColor,
                                },
                            ]}
                            onPress={() => setIsOpenSearch(!isOpenSearch)}
                        >
                            <SearchIcon width={10} />
                        </Pressable>
                        {isOpenSearch ? (
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
                        ) : null}
                    </View>
                </View>
                <BouncyCheckbox
                    size={24}
                    style={{ marginBottom: 6 }}
                    fillColor={styles.checkbox.color}
                    unfillColor={styles.checkbox.backgroundColor}
                    text="Hide 0 balances"
                    textStyle={styles.checkboxText}
                    innerIconStyle={{ borderWidth: 1 }}
                    onPress={(isChecked: boolean) => {
                        setHideZeroBalance(isChecked);
                    }}
                />
                {wallets?.length ? renderWallets() : returnNoData()}
            </View>
        </ScrollView>
    );
};
