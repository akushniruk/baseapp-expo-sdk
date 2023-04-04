import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiKey } from "../api/types";

export interface ApiKeyState {
    list: ApiKey[] | null;
}

export const initialState: ApiKeyState = {
    list: null,
};

export const apiKey = createSlice({
    initialState,
    name: "apiKey",
    reducers: {
        setApiKeyList: (
            state: ApiKeyState,
            action: PayloadAction<ApiKey[]>
        ) => {
            state.list = action.payload;
        },
        createApiKey: (state: ApiKeyState, action: PayloadAction<ApiKey>) => {
            state.list = state.list
                ? state.list.concat(action.payload)
                : [action.payload];
        },
        updateApiKey: (state: ApiKeyState, action: PayloadAction<ApiKey>) => {
            state.list =
                state.list?.map((apiKey: ApiKey) => {
                    if (apiKey.kid === action.payload.kid) {
                        return action.payload;
                    }

                    return apiKey;
                }) || null;
        },
    },
});

export const { setApiKeyList, createApiKey, updateApiKey } = apiKey.actions;
