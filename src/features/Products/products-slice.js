import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAllProducts = createAsyncThunk(
    "GET_ALL_PRODUCTS",
    async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        return await res.json()
    }
)

export const getSingleProduct = createAsyncThunk(
    "GET_SINGLE_PRODUCT",
    async (id) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return await res.json()
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: true,
        error: null,
        singleProduct: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                state.loading = false;
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.error = 'Oops! Something went wrong';
                state.loading = false;
            })
            .addCase(getSingleProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.singleProduct = action.payload
                state.loading = false;
            })
            .addCase(getSingleProduct.rejected, (state) => {
                state.error = 'Oops! Something went wrong';
                state.loading = false;
            })
    }
})

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => state.products;