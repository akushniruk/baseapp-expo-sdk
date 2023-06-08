import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../../shared";
import { format } from "../../../../shared/libs/format";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Currency } from "../../../currencies/model/type";
import { Market } from "../../../markets/model/type";
import { Tickers } from "../../../tickers/model/type";
import { IWallet } from "../../api/types";
import { estimateUnitValue } from "../../libs/helpers/estimateValue";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { walletDetailsStyles } from "./walletDetails.style";

const VALUATION_CURRENCY = "USDT";

export const WalletDetails: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => walletDetailsStyles(theme), [theme]);

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
        <View>
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
        </View>
    );
};
