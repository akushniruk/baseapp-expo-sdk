import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Member, User } from "../api/types";

export interface UserState {
    profile: User | null;
    peatioMember: Member | null;
    require2FA: boolean;
}

export const initialState: UserState = {
    profile: null,
    peatioMember: null,
    require2FA: false,
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
    },
});

export const { logout, setProfile, setRequire2FA, setPeatioMember } =
    user.actions;
