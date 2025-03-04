import { createSlice } from "@reduxjs/toolkit";
import type { StoreType } from "@utils/schemaTypes"

const toggleFormSlice = createSlice({
    name: 'formToggle',
    initialState: {
        isHidden: true,
        isEditMode: false,
        taskId: null,
    },
    reducers: {
        toggleMode: (state, action) => {
            state.isHidden = !state.isHidden;
            state.isEditMode = action.payload;
        },
        toggleVisibility: (state) => {
            state.isHidden = !state.isHidden;
        },
        setTaskId: (state, action) => {
            state.taskId = action.payload;
        }
    }
})

export const toggleFormReducer = toggleFormSlice.reducer;
export const { toggleMode, toggleVisibility, setTaskId } = toggleFormSlice.actions

export const selectStatusForm = (state: StoreType) => state.toggleForm;
export const selectTaskId = (state: StoreType) => state.toggleForm.taskId;