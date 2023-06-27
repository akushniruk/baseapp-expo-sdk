import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderHistory } from "../api/types";

export interface OrderState {
    historyList: IOrderHistory[];
    openOrders: IOrderHistory[];
}

export const initialOrderState: OrderState = {
    historyList: [],
    openOrders: [],
};

export const order = createSlice({
    name: "order",
    initialState: initialOrderState,
    reducers: {
        saveHistoryList(state, action: PayloadAction<IOrderHistory[]>) {
            state.historyList = action.payload;
        },
        saveOpenOrders(state, action: PayloadAction<IOrderHistory[]>) {
            state.openOrders = action.payload;
        },
    },
});

export const { saveHistoryList, saveOpenOrders } = order.actions;
