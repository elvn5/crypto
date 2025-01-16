import { Currency } from "@models/currency";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRequestState } from "types";

const initialState : DefaultRequestState<Currency[]>= {
    data: [],
    error: false,
    isLoading: false,
    refresh: false,
}

const currencyConfig = createSlice({
    name: "currency",
    initialState: initialState,
    reducers: {
       fetchCurrencyRequest: (state) => {
        state.isLoading = true;
       },
       fetchCurrencySuccess: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       },
       fetchCurrencyFailure: (state) => {
        state.isLoading = false;
        state.error = true;
       }
    },
    
})

const currencyReducer = currencyConfig.reducer;

export const { fetchCurrencyRequest, fetchCurrencyFailure, fetchCurrencySuccess } = currencyConfig.actions;

export {
    currencyReducer
}
