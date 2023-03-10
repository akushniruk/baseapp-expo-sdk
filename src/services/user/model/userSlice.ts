import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/types";

interface UserState {
    profile: User | null;
    require2FA: boolean;
}

const initialState: UserState = {
    profile: null,
    require2FA: false,
};

export const user = createSlice({
    initialState,
    name: "user",
    reducers: {
        logout: () => initialState,
        setProfile: (state, action: PayloadAction<User>) => {
            state.profile = action.payload;
        },
        setRequire2FA: (state, action: PayloadAction<boolean>) => {
            state.require2FA = action.payload;
        },
    },
});

export default user.reducer;

export const { logout, setProfile, setRequire2FA } = user.actions;
