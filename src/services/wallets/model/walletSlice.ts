import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWallet } from "../api/types";

export interface WalletState {
    wallet: IWallet | null;
}

export const WalletState: WalletState = {
    wallet: null,
};

export const wallet = createSlice({
    name: "wallet",
    initialState: WalletState,
    reducers: {
        setCurrentWallet(state, action: PayloadAction<IWallet>) {
            state.wallet = action.payload;
        },
    },
});

export const { setCurrentWallet } = wallet.actions;
