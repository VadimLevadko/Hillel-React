import { createSlice } from "@reduxjs/toolkit";
import { min, max } from "@utils/filtersUtils.js"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        category: 'all',
        price: {
            min: 0,
            max: 0,
        }
    },
    reducers: {
        setFilter: (state, action) => {
            state.category = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        clearFilter: (state) => {
            state.category = 'all';
            console.log(min, max)
            state.price.min = min;
            state.price.max = max;
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const { setFilter, setPrice, clearFilter } = filterSlice.actions;

export const selectCurrentPrice = (state) => state.filter.price;
export const selectCurrentCategory = (state) => state.filter.category;

export const selectVisibleProducts = (state) => {
    if(state.filter.category === "all") {
        return state.products.products.filter(el => Number(el.price) >= state.filter.price.min && Number(el.price) <= state.filter.price.max)
    }

    return state.products.products.filter(el => el.category === state.filter.category && Number(el.price) >= state.filter.price.min && Number(el.price) <= state.filter.price.max);
}