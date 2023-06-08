import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepositHistory } from "../api/types";

export interface DepositState {
    list: IDepositHistory[];
    total: string | null;
}

export const initialState: DepositState = {
    list: [],
    total: "0",
};

export const deposit = createSlice({
    initialState,
    name: "deposit",
    reducers: {
        setDepositHistoryList: (state: DepositState, action: PayloadAction<IDepositHistory[]>) => {
            state.list = action.payload;
        },
        setTotal: (state: DepositState, action: PayloadAction<string | null>) => {
            state.total = action.payload;
        },
    },
});

export const { setDepositHistoryList, setTotal } = deposit.actions;
