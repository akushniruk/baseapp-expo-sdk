import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderHistory, IOpenOrderHistory } from "../api/types";

export interface OrderState {
    historyList: IOrderHistory[];
    openOrdersList: IOpenOrderHistory[];
}

export const initialOrderState: OrderState = {
    historyList: [],
    openOrdersList: [],
};

export const order = createSlice({
    name: "order",
    initialState: initialOrderState,
    reducers: {
        saveHistoryList(state, action: PayloadAction<IOrderHistory[]>) {
            state.historyList = action.payload;
        },
        saveOpenOrders(state, action: PayloadAction<IOpenOrderHistory[]>) {
            state.openOrdersList = action.payload;
        },
    },
});

export const { saveHistoryList, saveOpenOrders } = order.actions;
