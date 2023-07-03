import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKline } from "../api/types";

export interface IKlineState {
    list: IKline[];
}

export const initialState: IKlineState = {
    list: [],
};

export const kline = createSlice({
    initialState,
    name: "kline",
    reducers: {
        setKlineList: (state: IKlineState, action: PayloadAction<IKline[]>) => {
            state.list = action.payload;
        },
    },
});

export const { setKlineList } = kline.actions;
