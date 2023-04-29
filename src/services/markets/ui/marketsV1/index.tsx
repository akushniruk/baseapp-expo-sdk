import React, { FC, useEffect, useMemo, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useAppSelector } from "../../../../shared";
import { useThemeContext } from "../../../../shared/hooks/useThemeContext";
import { RootState } from "../../../../shared/providers/redux/model/store";
import { Market } from "../../model/type";
import { marketsV1Styles } from "./marketsV1";

const TABLE_HEAD: string[] = ["Name", "Last price", "24h change"];

interface IMarketsV1 {
    navigation?: any;
}

export const MarketsV1: FC<IMarketsV1> = ({ navigation }: IMarketsV1) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => marketsV1Styles(theme), [theme]);

    const [topMarkets, setTopMarkets] = useState<Market[]>([]);

    const markets: Market[] = useAppSelector(
        (state: RootState) => state.markets.markets
    );

    useEffect(() => {
        if (markets?.length > 5) {
            setTopMarkets(markets.slice(0, 5));
        } else {
            setTopMarkets(markets);
        }
    }, [markets]);

    const renderTableHead = (headText: string, index: number) => {
        return (
            <Text
                style={[
                    { width: index === 0 ? 120 : "auto" },
                    styles.headContainerText,
                ]}
            >
                {headText}
            </Text>
        );
    };

    const redirectToTrading = (marketID: string) => {
        navigation &&
            navigation.navigate("MarketsStack", {
                screen: "Trading",
                params: { id: marketID },
            });
    };

    const renderMarketRow = (market: Market) => {
        const price_change = "+1.35%";
        const isPositive = /\+/.test(price_change);

        return (
            <Pressable
                key={market.id}
                style={styles.row}
                onPress={() => redirectToTrading(market.id)}
                // to={{ screen: "Markets/Trading", params: { id: market.id } }}
            >
                <View style={{ width: 120 }}>
                    <Text
                        style={[styles.bodyContainerText, styles.rowMarketText]}
                    >
                        {market.base_unit?.toUpperCase()}/
                        {market.quote_unit?.toUpperCase()}
                    </Text>
                    <Text style={styles.bodyContainerText}>Vol 2.91B</Text>
                </View>

                <Text style={styles.bodyContainerText}>$335.1</Text>
                <View
                    style={
                        isPositive
                            ? styles.priceChangePositive
                            : styles.priceChangeNegative
                    }
                >
                    <Text style={styles.labelText}>{price_change}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                {TABLE_HEAD.map(renderTableHead)}
            </View>
            <View style={styles.bodyContainer}>
                {topMarkets?.map(renderMarketRow)}
            </View>
        </View>
    );
};
