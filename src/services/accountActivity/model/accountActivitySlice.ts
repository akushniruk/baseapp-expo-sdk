import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccountActivity } from "../api/types";

export interface AccountActivityState {
    list: IAccountActivity[];
    total: string | null;
}

export const initialState: AccountActivityState = {
    list: [],
    total: "0",
};

export const accountActivity = createSlice({
    initialState,
    name: "accountActivity",
    reducers: {
        setAccountActivityList: (state: AccountActivityState, action: PayloadAction<IAccountActivity[]>) => {
            state.list = action.payload;
        },
        setTotal: (state: AccountActivityState, action: PayloadAction<string | null>) => {
            state.total = action.payload;
        },
    },
});

export const { setAccountActivityList, setTotal } = accountActivity.actions;
