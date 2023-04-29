import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tickers } from "./type";

export interface TickersState {
    tickers: Tickers | null;
    loading: boolean;
}

export const initialTickersState: TickersState = {
    tickers: null,
    loading: true,
};

export const tickers = createSlice({
    name: "tickers",
    initialState: initialTickersState,
    reducers: {
        saveTickers(state, action: PayloadAction<Tickers | null>) {
            state.tickers = action.payload;
        },
    },
});

export const { saveTickers } = tickers.actions;
