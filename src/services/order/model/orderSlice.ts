import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderHistory } from "../api/types";

export interface OrderState {
    historyList: IOrderHistory[];
}

export const initialOrderState: OrderState = {
    historyList: [],
};

export const order = createSlice({
    name: "order",
    initialState: initialOrderState,
    reducers: {
        saveHistoryList(state, action: PayloadAction<IOrderHistory[]>) {
            state.historyList = action.payload;
        },
    },
});

export const { saveHistoryList } = order.actions;
