import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMemberLevels, IMFA, Member, User } from "../api/types";

export interface UserState {
    profile: User | null;
    peatioMember: Member | null;
    memberLevels: IMemberLevels | null;
    require2FA: boolean;
    mfa: IMFA;
}

export const initialState: UserState = {
    profile: null,
    peatioMember: null,
    memberLevels: null,
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
        setMemberLevels: (state: UserState, action: PayloadAction<IMemberLevels>) => {
            state.memberLevels = action.payload;
        },
        logout: () => initialState,
        setProfile: (state: UserState, action: PayloadAction<User | null>) => {
            state.profile = action.payload;
        },
        setUpdateProfileOTP: (state: UserState, action: PayloadAction<boolean>) => {
            if (state.profile) {
                state.profile = {
                    ...state.profile,
                    otp: action.payload,
                };
            }
        },
        setRequire2FA: (state: UserState, action: PayloadAction<boolean>) => {
            state.require2FA = action.payload;
        },
        setMFA: (state: UserState, action: PayloadAction<IMFA>) => {
            state.mfa = action.payload;
        },
    },
});

export const { logout, setProfile, setUpdateProfileOTP, setRequire2FA, setPeatioMember, setMFA, setMemberLevels } =
    user.actions;
