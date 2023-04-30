import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { user } from "../../../../services/user/model/userSlice";
import { api } from "../lib/rtkApi";
import { alerts } from "../../../ui/alerts/model/alertsSlice";
import { apiKey } from "../../../../services/apiKeys/model/apiKeySlice";
import { markets } from "../../../../services/markets/model/marketsSlice";
import { currencies } from "../../../../services/currencies/model/currenciesSlice";
import { tickers } from "../../../../services/tickers/model/tickersSlice";
import { orderbook } from "../../../../services/orderbook/model/orderbookSlice";

export const createStore = (options?: ConfigureStoreOptions["preloadedState"] | undefined) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            user: user.reducer,
            alerts: alerts.reducer,
            apiKey: apiKey.reducer,
            markets: markets.reducer,
            currency: currencies.reducer,
            tickers: tickers.reducer,
            orderbook: orderbook.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
        ...options,
    });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
