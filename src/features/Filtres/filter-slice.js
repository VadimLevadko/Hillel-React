import { createSlice, createSelector } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "All",
    reducers: {
        setFilter: (_, action) => {
            return action.payload;
        },
    }
})

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

const selectTodos = (state) => state.todos;
export const selectCurrentFilter = (state) => state.filter;
export const selectVisibleTodos = createSelector(
    [selectTodos, selectCurrentFilter],
    (todos, filter) => {
        switch (filter) {
            case "All":
                return todos;

            case "New":
                return {
                    ...todos,
                    entities: todos.entities.filter((todo) => todo.status === "New"),
                };

            case "In progress":
                return {
                    ...todos,
                    entities: todos.entities.filter((todo) => todo.status === "In progress"),
                }

            case "Completed":
                return {
                    ...todos,
                    entities: todos.entities.filter((todo) => todo.status === "Completed"),
                };

            default:
                return todos;
        }
    }
);
