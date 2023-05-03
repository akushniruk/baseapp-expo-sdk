import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { format } from "../../../shared/libs/format";
import { RootState } from "../../../shared/providers/redux/model/store";
import { WebSocketContext } from "../../../shared/providers/websocket";
import { mapValues } from "../libs/mapValue";
import { orderBookTableStyles } from "./orderbook.styles";

interface IOrderBookTable {
    data: Array<any>;
    maxVolume?: number;
    orderBookEntry?: number[];
    side?: "ask" | "bid";
}

export const OrderBookTable: FC<IOrderBookTable> = ({ data, maxVolume, orderBookEntry, side }: IOrderBookTable) => {
    const ws: any = useContext(WebSocketContext);
    const { theme } = useThemeContext();
    const styles = useMemo(() => orderBookTableStyles(theme), [theme]);
    const currentMarket = useAppSelector((state: RootState) => state.markets.currentMarket);

    // FIX: ME double subscription
    useEffect(() => {
        if (ws && currentMarket) {
            ws.send(
                JSON.stringify({
                    event: "subscribe",
                    streams: [`${currentMarket?.id}.ob-inc`],
                })
            );
        }

        return () => {
            if (ws && currentMarket) {
                ws.send(
                    JSON.stringify({
                        event: "unsubscribe",
                        streams: [`${currentMarket?.id}.ob-inc`],
                    })
                );
            }
        };
    }, [ws, currentMarket]);

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

    const renderSide = useCallback(
        (item: any, index: number) => {
            const width = getRowWidth(index)?.width;

            if (side === "ask") {
                return (
                    <View style={styles.row}>
                        <Text style={[styles.rowText, styles.rowTextPriceAsks]}>
                            {format(item[0], currentMarket?.price_precision || 2)}
                        </Text>
                        <Text style={styles.rowText}>{format(item[1], currentMarket?.amount_precision || 2)}</Text>
                        <View style={[styles.rowBackgroundColor, styles.rowBackgroundColorAsks, { width: width }]} />
                    </View>
                );
            }

            return (
                <View style={styles.row}>
                    <Text style={styles.rowText}>{format(item[1], currentMarket?.amount_precision || 2)}</Text>
                    <Text style={[styles.rowText, styles.rowTextPriceBids]}>
                        {format(item[0], currentMarket?.price_precision || 2)}
                    </Text>
                    <View style={[styles.rowBackgroundColor, styles.rowBackgroundColorBids, { width: width }]} />
                </View>
            );
        },
        [getRowWidth]
    );

    return (
        <>
            <View>{data.map(renderSide)}</View>
        </>
    );
};
