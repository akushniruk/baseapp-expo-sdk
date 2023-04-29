import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "./type";

export interface CurrencyState {
    list: Currency[];
    loading: boolean;
}

export const initialCurrencyState: CurrencyState = {
    list: [],
    loading: true,
};

export const currencies = createSlice({
    name: "currency",
    initialState: initialCurrencyState,
    reducers: {
        saveCurrencies(state, action: PayloadAction<Currency[]>) {
            state.list = action.payload;
        },
    },
});

export const { saveCurrencies } = currencies.actions;
