import { createSlice } from "@reduxjs/toolkit";

const currencyConfig = createSlice({
    name: "currency",
    initialState: {
        data: [],
        error: null,
        isLoading: false,
    },
    reducers: {
        fetchRequest: () => {

        }
    }
})

const currencyReducer = currencyConfig.reducer;

export const {fetchRequest} = currencyConfig.actions; 

export {
    currencyReducer
}
