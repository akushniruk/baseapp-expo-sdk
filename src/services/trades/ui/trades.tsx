import React, { FC, useContext, useEffect } from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../shared";
import { RootState } from "../../../shared/providers/redux/model/store";
import { WebSocketContext } from "../../../shared/providers/websocket";
import { Market } from "../../markets/model/type";
import { useTradesMutation } from "../api/trades";
import { Trade } from "../api/types";
import { saveTrades } from "../model/tradesSlice";

export const Trades: FC = () => {
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

    return (
        <>
            <View>{JSON.stringify(trades)}</View>
        </>
    );
};
