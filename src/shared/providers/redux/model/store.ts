import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { user } from "../../../../services/user/model/userSlice";
import { api } from "../lib/rtkApi";
import { alerts } from "../../../ui/alerts/model/alertsSlice";

export const createStore: any = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            user: user.reducer,
            alerts: alerts.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
        ...options,
    });

export const store: any = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
