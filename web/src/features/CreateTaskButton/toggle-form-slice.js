import { createSlice } from "@reduxjs/toolkit";

const toggleFormSlice = createSlice({
    name: 'formToggle',
    initialState: true,
    reducers: {
        toggleForm: (state) => !state
    }
})

export const toggleFormReducer = toggleFormSlice.reducer;
export const { toggleForm } = toggleFormSlice.actions
export const selectStatusForm = (state) => state.toggleForm;