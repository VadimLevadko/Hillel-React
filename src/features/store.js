import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Products/products-slice.js"
import { filterReducer } from "./Filter/filter-slice.jsx"
import { cartReducer } from "./Cart/cart-slice.js"

const store = configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
        cart: cartReducer,
    },
});

export default store;