import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadTodos = createAsyncThunk(
    'todo/load-all-todos',
    async () => {
        const res = await fetch('http://localhost:5000/tasks');
        return await res.json();
    }
)

export const createTodo = createAsyncThunk(
    'todos/create-todo',
    async (title) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                status: 'new',
                description: 'some description',
                priority: "medium"
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
    reducers: {
        addUser: (state, action) => {
            state.entities.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createTodo.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.entities.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(loadTodos.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(loadTodos.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.entities.push(...action.payload);
                state.loading = 'idle';
            })
    }
})

export const { addUser } = todoSlice.actions;
export const todoReducer = todoSlice.reducer

export const selectUsers = (state) => state.todos;