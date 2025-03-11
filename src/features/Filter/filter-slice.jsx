import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../Products/products-slice.js"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        category: 'all',
        price: {
            min: 0,
            max: 999999999,
        },
        isVisible: false,
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
            state.price.min = 0;
            state.price.max = 999999999;
        },
        toggleVisibility: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const {
    setFilter,
    setPrice,
    clearFilter ,
    toggleVisibility
} = filterSlice.actions;

const selectFilter = (state) => state.filter;
export const selectCurrentPrice = (state) => state.filter.price;
export const selectCurrentCategory = (state) => state.filter.category;
export const selectIsVisible = (state) => state.filter.isVisible;

export const selectVisibleProducts = createSelector(
    [selectAllProducts, selectFilter],
    (products, filter) => {
        if(filter.category === "all") {
            return products.products.filter(el => Number(el.price) >= filter.price.min && Number(el.price) <= filter.price.max)
        }

        return products.products.filter(el => el.category === filter.category && Number(el.price) >= filter.price.min && Number(el.price) <= filter.price.max);
    }
)