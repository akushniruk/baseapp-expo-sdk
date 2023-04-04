import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { user } from "../../../../services/user/model/userSlice";
import { api } from "../lib/rtkApi";
import { alerts } from "../../../ui/alerts/model/alertsSlice";
import { apiKey } from "../../../../services/apiKeys/model/apiKeySlice";

export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            user: user.reducer,
            alerts: alerts.reducer,
            apiKey: apiKey.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
        ...options,
    });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
