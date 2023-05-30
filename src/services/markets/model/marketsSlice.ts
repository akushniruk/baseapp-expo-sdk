import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Market } from "./type";

export interface MarketsState {
    markets: Market[];
    currentMarket?: Market;
    marketsLoading: boolean;
}

export const initialMarketsState: MarketsState = {
    markets: [],
    marketsLoading: true,
};

export const markets = createSlice({
    name: "markets",
    initialState: initialMarketsState,
    reducers: {
        saveMarkets(state, action: PayloadAction<Market[]>) {
            state.markets = action.payload;
        },
        setCurrentMarket(state, action: PayloadAction<Market>) {
            state.currentMarket = action.payload;
        },
        initializeCurrentMarket(state, action: PayloadAction<Market>) {},
    },
});

export const { saveMarkets, setCurrentMarket, initializeCurrentMarket } = markets.actions;
