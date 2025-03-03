import { createSlice } from "@reduxjs/toolkit";

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

export const selectStatusForm = (state) => state.toggleForm;
export const selectTaskId = (state) => state.toggleForm.taskId;