import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, Text, View, VirtualizedList } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { format } from "../../../../shared/libs/format";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Ticker, Tickers } from "../../../tickers/model/type";
import { setCurrentMarket } from "../../model/marketsSlice";
import { Market } from "../../model/type";
import { marketsV1Styles } from "./marketsV1.styles";

const TABLE_HEAD: string[] = ["Name", "Last price", "24h change"];
const SYMBOL = "$";
const DEFAULT_PERCENTAGE_PRECISION = 2;
const FIXED_VOL_PRECISION = 2;

interface IMarketsV1 {
    navigation?: any;
    limit?: number;
}

export const MarketsV1: FC<IMarketsV1> = ({ navigation, limit }: IMarketsV1) => {
    const dispatch = useAppDispatch();
    const { theme } = useThemeContext();
    const styles = useMemo(() => marketsV1Styles(theme), [theme]);

    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);
    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    const topMarkets = useMemo(() => {
        if (limit && markets?.length > limit) {
            return markets.slice(0, limit);
        } else {
            return markets;
        }
    }, [markets, limit]);

    const handleUpdateCurrentMarket = useCallback(
        (market: Market) => {
            dispatch(setCurrentMarket(market));
            navigation?.navigate("Trading", {
                id: market.id,
                base_unit: market.base_unit,
                quote_unit: market.quote_unit,
            });
        },
        [dispatch, navigation]
    );

    const renderMarketRow = useCallback(
        (market: Market) => {
            const tickerForMarketById: Ticker | null = tickers ? tickers[market.id] : null;

            const formatPriceChange = (priceChange: string) => {
                const isPositive = /\+/.test(priceChange);
                const formattedPriceChange = `${priceChange.charAt(0)}${format(
                    priceChange.slice(1, -1),
                    DEFAULT_PERCENTAGE_PRECISION,
                    ","
                )}`;
                return (
                    <View style={isPositive ? styles.priceChangePositive : styles.priceChangeNegative}>
                        <Text style={styles.labelText}>{formattedPriceChange}%</Text>
                    </View>
                );
            };

            const formatVolume = (volume: string) => {
                return format(Number(volume), FIXED_VOL_PRECISION, ",");
            };

            const renderTickerInfo = () => {
                if (tickerForMarketById) {
                    const { price_change_percent, last, volume } = tickerForMarketById;
                    // const priceChange = `${price_change_percent.charAt(0)}${format(
                    //     price_change_percent.slice(1, -1),
                    //     DEFAULT_PERCENTAGE_PRECISION,
                    //     ","
                    // )}`;
                    // const formattedLastPrice = `${SYMBOL}${format(Number(last), market.price_precision, ",")}`;
                    const formattedVolume = formatVolume(volume);

                    return (
                        <View style={{ width: 120 }}>
                            <Text style={[styles.bodyContainerText, styles.rowMarketText]}>
                                {market.base_unit?.toUpperCase()}/{market.quote_unit?.toUpperCase()}
                            </Text>
                            <Text style={styles.bodyContainerText}>Vol {formattedVolume}</Text>
                        </View>
                    );
                }

                return null;
            };

            return (
                <Pressable
                    key={`${market.id}-${market.base_unit}`}
                    style={styles.row}
                    onPress={() => handleUpdateCurrentMarket(market)}
                >
                    {renderTickerInfo()}
                    <Text style={[styles.bodyContainerText, styles.lastPrice]}>
                        {tickerForMarketById
                            ? `${SYMBOL}${format(Number(tickerForMarketById.last), market.price_precision, ",")}`
                            : "-"}
                    </Text>
                    {tickerForMarketById ? formatPriceChange(tickerForMarketById.price_change_percent) : null}
                </Pressable>
            );
        },
        [tickers, styles, handleUpdateCurrentMarket, SYMBOL, DEFAULT_PERCENTAGE_PRECISION, FIXED_VOL_PRECISION]
    );

    const getItemCount = () => topMarkets.length;

    const getItem = (_data: unknown, index: number) => {
        return topMarkets[index];
    };

    const renderTableHead = (headText: string, index: number) => {
        return (
            <Text key={headText} style={[{ width: index === 0 ? 120 : "auto" }, styles.headContainerText]}>
                {headText}
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>{TABLE_HEAD.map(renderTableHead)}</View>
            <VirtualizedList
                initialNumToRender={14}
                renderItem={({ item }) => renderMarketRow(item)}
                keyExtractor={(item) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
                maxToRenderPerBatch={14}
                style={styles.bodyContainer}
            />
        </View>
    );
};
