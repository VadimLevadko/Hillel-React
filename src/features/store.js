import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from './Products/products-slice.js'
import { filterReducer } from "./Filter/filter-slice.jsx"

const store = configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
    },
});

export default store;