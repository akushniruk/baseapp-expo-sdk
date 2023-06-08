import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWithdrawalHistory } from "../api/types";

export interface WithdrawalState {
    list: IWithdrawalHistory[];
    total: string | null;
}

export const initialState: WithdrawalState = {
    list: [],
    total: "0",
};

export const withdrawal = createSlice({
    initialState,
    name: "withdrawal",
    reducers: {
        setWithdrawalHistoryList: (state: WithdrawalState, action: PayloadAction<IWithdrawalHistory[]>) => {
            state.list = action.payload;
        },
        setTotal: (state: WithdrawalState, action: PayloadAction<string | null>) => {
            state.total = action.payload;
        },
    },
});

export const { setWithdrawalHistoryList, setTotal } = withdrawal.actions;
