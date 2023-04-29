import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { format } from "../../../../shared/libs/format";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Ticker, Tickers } from "../../../tickers/model/type";
import { Market } from "../../model/type";
import { marketsV1Styles } from "./marketsV1";

const TABLE_HEAD: string[] = ["Name", "Last price", "24h change"];
const SYMBOL = "$";
const DEFAULT_PERCENTAGE_PRECISION = 2;

interface IMarketsV1 {
    navigation?: any;
    limit?: number;
}

export const MarketsV1: FC<IMarketsV1> = ({ navigation, limit }: IMarketsV1) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => marketsV1Styles(theme), [theme]);

    const [topMarkets, setTopMarkets] = useState<Market[]>([]);

    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);

    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    useEffect(() => {
        if (limit && markets?.length > limit) {
            setTopMarkets(markets.slice(0, limit));
        } else {
            setTopMarkets(markets);
        }
    }, [markets]);

    const renderTableHead = (headText: string, index: number) => {
        return <Text style={[{ width: index === 0 ? 120 : "auto" }, styles.headContainerText]}>{headText}</Text>;
    };

    const redirectToTrading = (marketID: string) => {
        navigation &&
            navigation.navigate("MarketsStack", {
                screen: "Trading",
                params: { id: marketID },
            });
    };

    const renderMarketRow = useCallback(
        (market: Market) => {
            const tickerForMarketById: Ticker | null = tickers ? tickers[market.id] : null;
            const isPositive = /\+/.test(tickerForMarketById?.price_change_percent || "");
            const priceChange = `${tickerForMarketById?.price_change_percent?.charAt(0)}${format(
                tickerForMarketById?.price_change_percent?.slice(1, -1),
                DEFAULT_PERCENTAGE_PRECISION,
                ","
            )}`;
            return (
                <Pressable
                    key={market.id}
                    style={styles.row}
                    onPress={() => redirectToTrading(market.id)}
                    // to={{ screen: "Markets/Trading", params: { id: market.id } }}
                >
                    <View style={{ width: 120 }}>
                        <Text style={[styles.bodyContainerText, styles.rowMarketText]}>
                            {market.base_unit?.toUpperCase()}/{market.quote_unit?.toUpperCase()}
                        </Text>
                        <Text style={styles.bodyContainerText}>
                            Vol{" "}
                            {tickerForMarketById
                                ? format(Number(tickerForMarketById.volume), market.price_precision, ",")
                                : "-"}
                        </Text>
                    </View>

                    <Text style={[styles.bodyContainerText, styles.lastPrice]}>
                        {tickerForMarketById
                            ? `${SYMBOL}${format(Number(tickerForMarketById.last), market.price_precision, ",")}`
                            : "-"}
                    </Text>
                    <View style={isPositive ? styles.priceChangePositive : styles.priceChangeNegative}>
                        <Text style={styles.labelText}>{tickerForMarketById ? `${priceChange}%` : "-"}</Text>
                    </View>
                </Pressable>
            );
        },
        [tickers, topMarkets]
    );

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>{TABLE_HEAD.map(renderTableHead)}</View>
            <View style={styles.bodyContainer}>{topMarkets?.map(renderMarketRow)}</View>
        </View>
    );
};
