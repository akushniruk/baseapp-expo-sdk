import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMFA, Member, User } from "../api/types";

export interface UserState {
    profile: User | null;
    peatioMember: Member | null;
    require2FA: boolean;
    mfa: IMFA;
}

export const initialState: UserState = {
    profile: null,
    peatioMember: null,
    require2FA: false,
    mfa: {
        barcode: "",
        url: "",
    },
};

export const user = createSlice({
    initialState,
    name: "user",
    reducers: {
        setPeatioMember: (state: UserState, action: PayloadAction<Member>) => {
            state.peatioMember = action.payload;
        },
        logout: () => initialState,
        setProfile: (state: UserState, action: PayloadAction<User>) => {
            state.profile = action.payload;
        },
        setRequire2FA: (state: UserState, action: PayloadAction<boolean>) => {
            state.require2FA = action.payload;
        },
        setMFA: (state: UserState, action: PayloadAction<IMFA>) => {
            state.mfa = action.payload;
        },
    },
});

export const { logout, setProfile, setRequire2FA, setPeatioMember, setMFA } = user.actions;
