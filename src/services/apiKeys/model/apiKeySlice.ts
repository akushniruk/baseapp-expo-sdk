import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiKey } from "../api/types";

export interface ApiKeyState {
    list: ApiKey[];
}

export const initialState: ApiKeyState = {
    list: [],
};

export const apiKey = createSlice({
    initialState,
    name: "apiKey",
    reducers: {
        setApiKeyList: (state: ApiKeyState, action: PayloadAction<ApiKey[]>) => {
            state.list = action.payload;
        },
        createApiKey: (state: ApiKeyState, action: PayloadAction<ApiKey>) => {
            state.list = state.list ? state.list.concat(action.payload) : [action.payload];
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
        deleteApiKey: (state: ApiKeyState, action: PayloadAction<ApiKey>) => {
            state.list = state.list.filter((apiKey: ApiKey) => apiKey.kid !== action.payload.kid);
        },
    },
});

export const { setApiKeyList, createApiKey, updateApiKey, deleteApiKey } = apiKey.actions;
