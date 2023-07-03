import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { View, VirtualizedList, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { format } from "../../../shared/libs/format";
import { RootState } from "../../../shared/providers/redux/model/store";
import { WebSocketContext } from "../../../shared/providers/websocket";
import { Market } from "../../markets/model/type";
import { useTradesMutation } from "../api/trades";
import { Trade } from "../api/types";
import { convertDateFromTimestamp, getHHMMSSFromDate } from "../libs/convertDateFromTimestamp";
import { tradesStyles } from "./trades.styles";

const TABLE_HEAD: string[] = ["Name", "Last price", "24h change"];

export const Trades: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => tradesStyles(theme), [theme]);

    const ws: any = useContext(WebSocketContext);

    const [getTradesList] = useTradesMutation();

    const currentMarket: Market | undefined = useAppSelector((state: RootState) => state.markets.currentMarket);
    const trades: Trade[] = useAppSelector((state: RootState) => state.trades.list);

    useEffect(() => {
        if (ws && currentMarket) {
            getTradesList({ marketId: currentMarket.id });

            ws?.send(
                JSON.stringify({
                    event: "subscribe",
                    streams: [`${currentMarket?.id}.trades`],
                })
            );
        }

        return () => {
            if (ws && currentMarket) {
                ws?.send(
                    JSON.stringify({
                        event: "unsubscribe",
                        streams: [`${currentMarket?.id}.trades`],
                    })
                );
            }
        };
    }, [ws, currentMarket]);

    const getItemCount = (_data: unknown) => trades?.length;

    const getItem = (_data: unknown, index: number) => {
        return trades[index];
    };

    const priceFixed = currentMarket ? currentMarket.price_precision : 0;
    const amountFixed = currentMarket ? currentMarket.amount_precision : 0;

    const renderRow = (trade: Trade) => {
        const rowHighlighted = trade.taker_type === "buy" ? styles.rowBid : styles.rowAsk;

        return (
            <View style={styles.row} key={`${trade.id}`}>
                <Text style={[styles.rowText, rowHighlighted, { width: 80 }]}>
                    {getHHMMSSFromDate(convertDateFromTimestamp(trade.created_at))}
                    {/* ID: {trade.id} */}
                </Text>
                <Text style={[styles.rowText, rowHighlighted, { textAlign: "left" }]}>
                    {format(trade.amount, amountFixed)}
                </Text>
                <Text style={[{ textAlign: "right" }, styles.rowText, rowHighlighted]}>
                    {format(trade.price, priceFixed)}
                </Text>
            </View>
        );
    };

    const renderTableHead = (headText: string, index: number) => {
        return (
            <Text key={index} style={[{ width: index === 0 ? 80 : "auto" }, styles.headContainerText]}>
                {headText}
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>{TABLE_HEAD.map(renderTableHead)}</View>
            <VirtualizedList
                initialNumToRender={30}
                renderItem={({ item }) => renderRow(item)}
                keyExtractor={(item) => String(item.id)}
                getItemCount={getItemCount}
                getItem={getItem}
                maxToRenderPerBatch={1}
                style={styles.bodyContainer}
            />
        </View>
    );
};
