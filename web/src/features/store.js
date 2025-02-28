import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from './Todos/todos-slice.js'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    devTools: true
})