import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoItemType, StoreType } from "@utils/schemaTypes"

export const loadTodos = createAsyncThunk(
    'todo/load-all-todos',
    async () => {
        const res = await fetch('http://localhost:5000/tasks');
        return await res.json();
    }
)

export const deleteTodo = createAsyncThunk<string, string>(
    'todo/delete-todo',
    async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        await res.json()

        return id;
    }
)

export const editTodo = createAsyncThunk(
    'todo/edit-todo',
    async ({ id, title, description, status, priority }: TodoItemType) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                status,
                priority
            })
        })
        return await res.json();
    }
)

export const createTodo = createAsyncThunk(
    'todos/create-todo',
    async ({ title, description, status, priority }: TodoItemType) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                status,
                priority
            })
        })
        return await res.json();
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        entities: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createTodo.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'You can\'t create a task when the server is offline. Try again using "npm run start"';
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.entities.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.entities = state.entities.filter((todo: TodoItemType) => todo.id !== action.payload);
            })
            .addCase(loadTodos.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(loadTodos.rejected, (state) => {
                state.loading = 'idle';
                state.error = `The server is not running, try again with "npm run start"`;
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.entities.push(...action.payload);
                state.loading = 'idle';
            })
            .addCase(editTodo.fulfilled, (state, action) => {
                const taskIndex = state.entities.findIndex((task: TodoItemType) => task.id === action.payload.id);
                state.entities[taskIndex] = action.payload;
            })
    }
})

export const todoReducer = todoSlice.reducer

export const selectAllTodos = (state: StoreType) => state.todos;