import React, { FC, useMemo } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useAppSelector } from "../../../../shared";
import { format } from "../../../../shared/libs/format";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Currency } from "../../../currencies/model/type";
import { Market } from "../../../markets/model/type";
import { Tickers } from "../../../tickers/model/type";
import { IWallet } from "../../api/types";
import { estimateUnitValue } from "../../libs/helpers/estimateValue";

const VALUATION_CURRENCY = "USDT";

export const WalletDetails: FC = () => {
    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);

    const currencies: Currency[] = useAppSelector((state: RootState) => state.currency.list);
    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);
    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    const estimatedValuePrimary = useMemo(() => {
        const estimatedValue =
            tickers && wallet?.balance
                ? estimateUnitValue(
                      wallet?.currency.toUpperCase(),
                      VALUATION_CURRENCY,
                      +wallet.balance,
                      currencies,
                      markets,
                      tickers
                  )
                : format(0, wallet?.fixed || 2);
        return estimatedValue;
    }, [currencies, wallet, markets, tickers]);

    return (
        <ScrollView>
            <View>
                <Text>
                    Total: {format(wallet?.balance, wallet?.fixed || 2)}
                    <Text>
                        ≈{estimatedValuePrimary} {VALUATION_CURRENCY}
                    </Text>
                </Text>
                <Text>Available: {format(wallet?.balance, wallet?.fixed || 2)}</Text>
                <Text>Unavailable: {format(wallet?.locked, wallet?.fixed || 2)}</Text>
            </View>
            <View>
                <Text>Trade</Text>
                <Text>Buy Crypto</Text>
                <Text>Sell Crypto</Text>
            </View>
            <View>
                {/* TODO: Markets by selected currency (wallet) */}
                <View>
                    <Text>Spot</Text>
                    <Pressable>
                        <Text>More</Text>
                    </Pressable>
                </View>

                <View>{/* Slider with markets as a card  */}</View>
            </View>
            <View>
                <View>
                    <Text>History</Text>
                    <Pressable>
                        <Text>More</Text>
                    </Pressable>
                </View>
                <Text>Tab panel with: All, deposit, withdrawal</Text>
                <View>
                    <Text>Table</Text>
                </View>
            </View>
        </ScrollView>
    );
};
