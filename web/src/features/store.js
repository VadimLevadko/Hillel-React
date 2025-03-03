import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from './Todos/todos-slice.js'
import { toggleFormReducer } from './CreateTaskButton/toggle-form-slice.js'
import { filterReducer } from './Filtres/filter-slice.js'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filter: filterReducer,
        toggleForm: toggleFormReducer,
    },
    devTools: true
})