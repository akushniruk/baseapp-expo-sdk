import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccountWS, IWallet, IWalletAddress } from "../api/types";
import { updateWallet, updateWalletBalanceWS } from "./walletSliceHelper";

export interface IWalletState {
    wallet: IWallet | null;
}

export const WalletState: IWalletState = {
    wallet: null,
};

export const wallet = createSlice({
    name: "wallet",
    initialState: WalletState,
    reducers: {
        setCurrentWallet(state, action: PayloadAction<IWallet>) {
            state.wallet = action.payload;
        },
        setWalletAddress(state, action: PayloadAction<IWalletAddress>) {
            state.wallet = state.wallet ? updateWallet(state.wallet, action.payload) : null;
        },
        updateWalletBalance(state, action: PayloadAction<IAccountWS>) {
            state.wallet = state.wallet ? updateWalletBalanceWS(state.wallet, action.payload) : null;
        },
    },
});

export const { setCurrentWallet, setWalletAddress, updateWalletBalance } = wallet.actions;
