import { MarketData } from "@models/market-data";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRequestState } from "types";

const initialState: DefaultRequestState<MarketData[]> = {
    data: [],
    error: false,
    isLoading: false,
    refresh: false,
}

const marketData = createSlice({
    name: "market-data",
    initialState: initialState,
    reducers: {
        fetchMarketRequest: (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = false;
        },
        fetchMarketSuccess: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = false;
        },
        fetchMarketFailure: (state) => {
        state.isLoading = false;
        state.error = true;
        },
        refreshDataRequest: (state) => {
        state.refresh = true
        },
        refreshData: (state, action)  => {
        state.data = action.payload;
        }
    }
})

const marketReducer = marketData.reducer;

export const { fetchMarketRequest, fetchMarketSuccess, fetchMarketFailure, refreshData, refreshDataRequest } = marketData.actions;

export {
    marketReducer
}
