import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransferHistory } from "../api/types";

export interface TransferState {
    list: ITransferHistory[];
    total: string | null;
}

export const initialState: TransferState = {
    list: [],
    total: "0",
};

export const transfer = createSlice({
    initialState,
    name: "transfer",
    reducers: {
        setTransferHistoryList: (state: TransferState, action: PayloadAction<ITransferHistory[]>) => {
            state.list = action.payload;
        },
        setTotal: (state: TransferState, action: PayloadAction<string | null>) => {
            state.total = action.payload;
        },
    },
});

export const { setTransferHistoryList, setTotal } = transfer.actions;
