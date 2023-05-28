import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sliceArray } from "../../orderbook/libs/sliceArray";
import { EventTrade, Trade } from "../api/types";
import { convertTradeEventList } from "../libs/convertTradeEvent";

const DEFAULT_STORAGE_LIMIT = 30;

export interface TradeState {
    list: Trade[];
    loading: boolean;
}

export const initialTradeState: TradeState = {
    list: [],
    loading: false,
};

export const trades = createSlice({
    name: "trades",
    initialState: initialTradeState,
    reducers: {
        saveTrades(state, action: PayloadAction<Trade[]>) {
            state.list = sliceArray(action.payload, DEFAULT_STORAGE_LIMIT);
        },
        updateTrades(state, action: PayloadAction<{ market: string; trades: EventTrade[] }>) {
            const lastTrades = convertTradeEventList(action.payload.market, action.payload.trades);

            state.list = sliceArray([...lastTrades, ...state.list], DEFAULT_STORAGE_LIMIT);
        },
    },
});

export const { saveTrades, updateTrades } = trades.actions;