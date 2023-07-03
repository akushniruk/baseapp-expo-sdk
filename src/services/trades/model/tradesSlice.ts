import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sliceArray } from "../../orderbook/libs/sliceArray";
import { EventTrade, ITradesHistory, Trade } from "../api/types";
import { convertTradeEventList } from "../libs/convertTradeEvent";

const DEFAULT_STORAGE_LIMIT = 30;

export interface TradeState {
    list: Trade[];
    historyList: ITradesHistory[];
    loading: boolean;
}

export const initialTradeState: TradeState = {
    list: [],
    historyList: [],
    loading: false,
};

export const trades = createSlice({
    name: "trades",
    initialState: initialTradeState,
    reducers: {
        saveTrades(state, action: PayloadAction<Trade[]>) {
            state.list = state.list.concat(action.payload.slice(0, DEFAULT_STORAGE_LIMIT));
        },
        updateTrades(state, action: PayloadAction<{ market: string; trades: EventTrade[] }>) {
            const lastTrades = convertTradeEventList(action.payload.market, action.payload.trades);
            const slicedItems = state.list.slice(0, 30 - lastTrades.length);

            state.list = [...lastTrades, ...slicedItems];
        },
        saveHistoryList(state, action: PayloadAction<ITradesHistory[]>) {
            state.historyList = action.payload;
        },
    },
});

export const { saveTrades, updateTrades, saveHistoryList } = trades.actions;
