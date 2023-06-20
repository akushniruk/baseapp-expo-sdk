import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, IAccountWS } from "../api/types";
import { updateAccounts } from "./accountSliceHelper";

export interface IAccountState {
    list: IAccount[];
}

export const AccountState: IAccountState = {
    list: [],
};

export const accounts = createSlice({
    name: "account",
    initialState: AccountState,
    reducers: {
        setAccounts(state, action: PayloadAction<IAccount[]>) {
            state.list = action.payload;
        },
        updateAccountsBalance(state, action: PayloadAction<IAccountWS>) {
            state.list = updateAccounts(state.list, action.payload);
        },
    },
});

export const { setAccounts, updateAccountsBalance } = accounts.actions;
