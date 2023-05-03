import React, { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { View, VirtualizedList, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../shared";
import { useThemeContext } from "../../../shared/hooks/useThemeContext";
import { RootState } from "../../../shared/providers/redux/model/store";
import { WebSocketContext } from "../../../shared/providers/websocket";
import { Market } from "../../markets/model/type";
import { useTradesMutation } from "../api/trades";
import { Trade } from "../api/types";
import { saveTrades } from "../model/tradesSlice";
import { tradesStyles } from "./trades.styles";

const TABLE_HEAD: string[] = ["Name", "Last price", "24h change"];

export const Trades: FC = () => {
    const { theme } = useThemeContext();
    const styles = useMemo(() => tradesStyles(theme), [theme]);

    const ws: any = useContext(WebSocketContext);

    const dispatch = useAppDispatch();
    const [getTradesList] = useTradesMutation();

    const currentMarket: Market | undefined = useAppSelector((state: RootState) => state.markets.currentMarket);
    const trades: Trade[] = useAppSelector((state: RootState) => state.trades.list);

    useEffect(() => {
        if (ws && currentMarket) {
            dispatch(saveTrades([]));
            getTradesList({ marketId: currentMarket.id });

            ws?.send(
                JSON.stringify({
                    event: "subscribe",
                    streams: [`${currentMarket?.id}.trades`],
                })
            );
        }

        return () => {
            dispatch(saveTrades([]));

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

    const renderRow = useCallback((trade: Trade) => {
        return (
            <View style={styles.row} key={`${trade.id}`}>
                <Text>{trade.created_at}</Text>
                <Text>{trade.amount}</Text>
                <Text style={{ width: "120px", textAlign: "right" }}>{trade.price}</Text>
            </View>
        );
    }, []);

    const renderTableHead = (headText: string, index: number) => {
        return (
            <Text key={index} style={styles.headContainerText}>
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
                maxToRenderPerBatch={30}
                style={styles.bodyContainer}
            />
        </View>
    );
};
