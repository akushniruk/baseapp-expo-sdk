import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWallet } from "../api/types";

export interface WalletsState {
    list: IWallet[];
}

export const WalletsState: WalletsState = {
    list: [],
};

export const wallets = createSlice({
    name: "wallets",
    initialState: WalletsState,
    reducers: {
        setWallets(state, action: PayloadAction<IWallet[]>) {
            state.list = action.payload;
        },
    },
});

export const { setWallets } = wallets.actions;
