import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { format } from "../../../shared/libs/format";
import { RootState } from "../../../shared/providers/redux/model/store";
import { Market } from "../../markets/model/type";
import { Ticker, Tickers } from "../model/type";
import { tickersStyles } from "./tickers.styles";

const DEFAULT_PERCENTAGE_PRECISION = 2;
const FIXED_VOL_PRECISION = 2;

interface ITickerV1 {
    marketId: string;
}

export const TickerV1: FC<ITickerV1> = ({ marketId }: ITickerV1) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => tickersStyles(theme), [theme]);

    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);
    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    const tickerForMarketById: Ticker | null = tickers ? tickers[marketId] : null;
    const market = markets.length ? markets.find((market: Market) => market.id === marketId) : null;
    const isPositive = /\+/.test(tickerForMarketById?.price_change_percent || "");
    const priceChange = `${tickerForMarketById?.price_change_percent?.charAt(0)}${format(
        tickerForMarketById?.price_change_percent?.slice(1, -1),
        DEFAULT_PERCENTAGE_PRECISION,
        ","
    )}`;

    return (
        <View style={styles.container}>
            <View style={styles.flexCenter}>
                <Text style={[styles.lastPrice, isPositive ? styles.positive : styles.negative]}>
                    {tickerForMarketById && market
                        ? `${format(Number(tickerForMarketById.last), market.price_precision, ",")}`
                        : "-"}
                </Text>
                <Text style={isPositive ? styles.positive : styles.negative}>
                    {tickerForMarketById ? `${priceChange}%` : "-"}
                </Text>
            </View>
            <View style={styles.flexCenter}>
                <Text style={styles.priceText}>
                    H:{" "}
                    <Text style={[styles.priceText, isPositive ? styles.positive : styles.negative]}>
                        {tickerForMarketById && market
                            ? `${format(Number(tickerForMarketById.high), market.price_precision, ",")}`
                            : "-"}
                    </Text>
                </Text>
                <Text style={styles.priceText}>
                    L:{" "}
                    <Text style={[styles.priceText, isPositive ? styles.positive : styles.negative]}>
                        {tickerForMarketById && market
                            ? `${format(Number(tickerForMarketById.low), market.price_precision, ",")}`
                            : "-"}
                    </Text>
                </Text>
                <Text style={styles.priceText}>
                    24H vol:{" "}
                    <Text style={[styles.priceText, isPositive ? styles.positive : styles.negative]}>
                        {tickerForMarketById && market
                            ? `${format(Number(tickerForMarketById.volume), FIXED_VOL_PRECISION, ",")}`
                            : "-"}
                    </Text>
                </Text>
            </View>
        </View>
    );
};
