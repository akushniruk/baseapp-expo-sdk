import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount } from "../api/types";

export interface AccountState {
    list: IAccount[];
}

export const AccountState: AccountState = {
    list: [],
};

export const accounts = createSlice({
    name: "account",
    initialState: AccountState,
    reducers: {
        setAccounts(state, action: PayloadAction<IAccount[]>) {
            state.list = action.payload;
        },
    },
});

export const { setAccounts } = accounts.actions;
