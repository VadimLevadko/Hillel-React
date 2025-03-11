import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    usedId: [],
    fullPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductCart: (state, action) => {
            state.products.push({...action.payload, count: 1});
            state.usedId.push(action.payload.id);
            state.fullPrice += action.payload.price;
        },
        removeProductCart: (state, action) => {
            state.products = state.products.filter(todo => todo.id !== action.payload.id);
            state.usedId = state.usedId.filter(item => item !== action.payload.id);
            state.fullPrice -= action.payload.price * action.payload.count;
        },
        increaseCount: (state, action) => {
            const index = state.products.findIndex(el => el.id === action.payload.id);
            state.products[index].count++;
            state.fullPrice += state.products[index].price;
        },
        decreaseCount: (state, action) => {
            const index = state.products.findIndex(el => el.id === action.payload.id);

            if(state.products[index].count !== 1) {
                state.products[index].count--;
                state.fullPrice -= state.products[index].price;
            }
        },
        clearCart: () => ({ ...initialState }),
    }
})

export const cartReducer = cartSlice.reducer;

export const {
    addProductCart,
    removeProductCart,
    clearCart ,
    increaseCount,
    decreaseCount
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

