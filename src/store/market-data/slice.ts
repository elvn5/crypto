import { createSlice } from "@reduxjs/toolkit";

const marketData = createSlice({
    name: "market-data",
    initialState: {
        data: [],
        error: null,
        isLoading: false
    },
    reducers: {}
})

const marketReducer = marketData.reducer;

export {
    marketReducer
}