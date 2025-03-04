import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from './Todos/todos-slice.ts'
import { toggleFormReducer } from './TaskHandler/toggle-form-slice.ts'
import { filterReducer } from './Filtres/filter-slice.ts'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filter: filterReducer,
        toggleForm: toggleFormReducer,
    },
    devTools: true
})