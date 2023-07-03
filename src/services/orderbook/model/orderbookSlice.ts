import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleIncrementalUpdate, handleIncrementalUpdateArray } from "../libs/handleIncrementalUpdate";
import { sliceArray } from "../libs/sliceArray";

const ORDERBOOK_SIDE_LIMIT = 35;

export interface OrderbookState {
    asks: Array<any>;
    bids: Array<any>;
    sequence: number | null;
}

export const initialOrderbookState: OrderbookState = {
    asks: [],
    bids: [],
    sequence: null,
};

export const orderbook = createSlice({
    name: "orderbook",
    initialState: initialOrderbookState,
    reducers: {
        saveOrderbookSnapshot(state, action: PayloadAction<OrderbookState>) {
            state.asks = sliceArray(action.payload.asks, ORDERBOOK_SIDE_LIMIT);
            state.bids = sliceArray(action.payload.bids, ORDERBOOK_SIDE_LIMIT);
            state.sequence = action.payload.sequence;
        },
        updateOrderbook(state, action: PayloadAction<OrderbookState>) {
            const payload = {
                ...state,
                sequence: action.payload.sequence,
            };

            if (action.payload.asks) {
                payload.asks = Array.isArray(action.payload.asks[0])
                    ? handleIncrementalUpdateArray(state.asks, action.payload.asks as string[][], "asks").slice(
                          0,
                          ORDERBOOK_SIDE_LIMIT
                      )
                    : handleIncrementalUpdate(state.asks, action.payload.asks as string[], "asks").slice(
                          0,
                          ORDERBOOK_SIDE_LIMIT
                      );
            }

            if (action.payload.bids) {
                payload.bids = Array.isArray(action.payload.bids[0])
                    ? handleIncrementalUpdateArray(state.bids, action.payload.bids as string[][], "bids").slice(
                          0,
                          ORDERBOOK_SIDE_LIMIT
                      )
                    : handleIncrementalUpdate(state.bids, action.payload.bids as string[], "bids").slice(
                          0,
                          ORDERBOOK_SIDE_LIMIT
                      );
            }

            state.asks = payload.asks;
            state.bids = payload.bids;
            state.sequence = payload.sequence;
        },
    },
});

export const { saveOrderbookSnapshot, updateOrderbook } = orderbook.actions;
