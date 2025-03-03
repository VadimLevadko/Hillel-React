import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadTodos = createAsyncThunk(
    'todo/load-all-todos',
    async () => {
        const res = await fetch('http://localhost:5000/tasks');
        return await res.json();
    }
)

export const deleteTodo = createAsyncThunk(
    'todo/delete-todo',
    async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        await res.json()

        return id;
    }
)

// export const editTodo = createAsyncThunk(
//     'todo/edit-todo',
//     async (todos, { id, title, description, status, priority }) => {
//
//     }
// )

export const createTodo = createAsyncThunk(
    'todos/create-todo',
    async ({title, description, status, priority}) => {
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
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.entities = state.entities.filter(todo => todo.id !== action.payload);
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

export const todoReducer = todoSlice.reducer

export const selectUsers = (state) => state.todos;