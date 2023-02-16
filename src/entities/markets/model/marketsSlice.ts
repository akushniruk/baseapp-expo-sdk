import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Market } from './type';

export interface MarketsState {
    markets: Market[];
    currentMarket?: Market;
    marketsLoading: boolean;
}

export const initialMarketsState: MarketsState = {
    markets: [],
    marketsLoading: true,
};

const marketsSlice = createSlice({
    name: 'markets',
    initialState: initialMarketsState,
    reducers: {
        saveMarkets(state, action: PayloadAction<(string | number)[][]>) {
            console.log('save Markets,', state, action)
        },
        setCurrentMarket(state, action: PayloadAction<Market>) {
            console.log('currentMarket');
        },
        initializeCurrentMarket(state, action: PayloadAction<Market>) {
            console.log('InitCurrentMarket')
        },
    },
});

export const {
    saveMarkets,
    setCurrentMarket,
    initializeCurrentMarket,
} = marketsSlice.actions;
export const marketsReducer = marketsSlice.reducer;
export default marketsSlice.reducer;
