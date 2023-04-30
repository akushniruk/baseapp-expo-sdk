import React, { FC, useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { mapValues } from "../libs/mapValue";
import { orderBookTableStyles } from "./orderbook.styles";

interface IOrderBookTable {
    data: Array<any>;
    maxVolume?: number;
    orderBookEntry?: number[];
    side?: "ask" | "bid";
}

export const OrderBookTable: FC<IOrderBookTable> = ({ data, maxVolume, orderBookEntry, side }: IOrderBookTable) => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderBookTableStyles(theme), [theme]);

    const resultData = mapValues(maxVolume, orderBookEntry);

    const getRowWidth = useCallback(
        (index: number) => {
            if (resultData && resultData.length) {
                return {
                    width: `${resultData[index].value}%`,
                };
            }
        },
        [resultData]
    );

    const renderSide = useCallback((item: any, index: number) => {
        if (side === "ask") {
            return (
                <View style={styles.row}>
                    <Text style={[styles.rowText, styles.rowTextPriceAsks]}>{item[0]}</Text>
                    <Text style={styles.rowText}>{item[1]}</Text>
                    <View
                        style={[
                            styles.rowBackgroundColor,
                            styles.rowBackgroundColorAsks,
                            { width: getRowWidth(index)?.width },
                        ]}
                    />
                </View>
            );
        }

        return (
            <View style={styles.row}>
                <Text style={styles.rowText}>{item[1]}</Text>
                <Text style={[styles.rowText, styles.rowTextPriceBids]}>{item[0]}</Text>
                <View
                    style={[
                        styles.rowBackgroundColor,
                        styles.rowBackgroundColorBids,
                        { width: getRowWidth(index)?.width },
                    ]}
                />
            </View>
        );
    }, []);

    return (
        <>
            <View>{data.map(renderSide)}</View>
        </>
    );
};
