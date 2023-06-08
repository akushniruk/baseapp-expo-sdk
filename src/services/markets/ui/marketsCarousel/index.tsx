import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, Text, View, Dimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { format } from "../../../../shared/libs/format";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Ticker, Tickers } from "../../../tickers/model/type";
import { setCurrentMarket } from "../../model/marketsSlice";
import { Market } from "../../model/type";
import { marketsV1Styles } from "./marketsV1.styles";
import Carousel from "react-native-reanimated-carousel";

const VALUATION_CURRENCY = "USDT";
const COUNT = 3;
const WIDTH = Dimensions.get("window").width;
const SYMBOL = "$";
const DEFAULT_PERCENTAGE_PRECISION = 2;
const FIXED_VOL_PRECISION = 2;

interface IMarketsCarousel {
    navigation?: any;
    code: string;
}

export const MarketsCarousel: FC<IMarketsCarousel> = ({ navigation, code }: IMarketsCarousel) => {
    const dispatch = useAppDispatch();
    const { theme } = useThemeContext();
    const styles = useMemo(() => marketsV1Styles(theme), [theme]);

    const [marketsBySelectedWallet, setMarketsBySelectedWallet] = useState<Market[]>([]);

    const markets: Market[] = useAppSelector((state: RootState) => state.markets.markets);

    const tickers: Tickers | null = useAppSelector((state: RootState) => state.tickers.tickers);

    useEffect(() => {
        if (markets && code) {
            const marketsBySelectedWallet = markets.filter((market: Market) => {
                return market.base_unit === code || market.quote_unit === code;
            });
            setMarketsBySelectedWallet(marketsBySelectedWallet);
        }
    }, [code, markets]);

    const handleUpdateCurrentMarket = (market: Market) => {
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
                    style={styles.card}
                    key={`${market.id}-${market.base_unit}`}
                    onPress={() => handleUpdateCurrentMarket(market)}
                >
                    <Text style={styles.market}>
                        {market.base_unit?.toUpperCase()}/{market.quote_unit?.toUpperCase()}
                    </Text>
                    <Text style={styles.lastPrice}>
                        {tickerForMarketById
                            ? `${SYMBOL}${format(Number(tickerForMarketById.last), market.price_precision, ",")}`
                            : "-"}
                    </Text>
                    <Text style={isPositive ? styles.priceChangePositive : styles.priceChangeNegative}>
                        {tickerForMarketById ? `${priceChange}%` : "-"}
                    </Text>
                </Pressable>
            );
        },
        [tickers, marketsBySelectedWallet]
    );

    return (
        <Carousel
            loop
            autoPlay={false}
            vertical={false}
            width={WIDTH / COUNT}
            height={WIDTH / 2}
            style={{
                width: WIDTH,
            }}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => marketsBySelectedWallet.map(renderMarketRow)[index]}
        />
    );
};
