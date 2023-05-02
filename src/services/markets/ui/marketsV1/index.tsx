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

    const handleUpdateCurrentMarket = (market: Market) => {
        console.log("setMarket", market);
        dispatch(setCurrentMarket(market));
        navigation?.navigate("Trading", { id: market.id, base_unit: market.base_unit, quote_unit: market.quote_unit });
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
                    key={`${market.id}-${market.base_unit}`}
                    style={styles.row}
                    onPress={() => handleUpdateCurrentMarket(market)}
                >
                    <View style={{ width: 120 }}>
                        <Text style={[styles.bodyContainerText, styles.rowMarketText]}>
                            {market.base_unit?.toUpperCase()}/{market.quote_unit?.toUpperCase()}
                        </Text>
                        <Text style={styles.bodyContainerText}>
                            Vol{" "}
                            {tickerForMarketById
                                ? format(Number(tickerForMarketById.volume), FIXED_VOL_PRECISION, ",")
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

    const getItemCount = (_data: unknown) => topMarkets?.length;

    const getItem = (_data: unknown, index: number) => {
        return topMarkets[index];
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
