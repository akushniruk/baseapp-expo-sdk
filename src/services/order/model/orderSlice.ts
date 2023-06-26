import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITradesHistory } from "../../trades/api/types";

export interface OrderState {
    historyList: ITradesHistory[];
}

export const initialOrderState: OrderState = {
    historyList: [],
};

export const order = createSlice({
    name: "order",
    initialState: initialOrderState,
    reducers: {
        saveHistoryList(state, action: PayloadAction<ITradesHistory[]>) {
            state.historyList = action.payload;
        },
    },
});

export const { saveHistoryList } = order.actions;
