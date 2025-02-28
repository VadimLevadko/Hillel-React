import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store.js'
import NewTodo from './app/components/NewTodo'

import './app/globals.css'

import TodoSection from "./features/Todos/TodoSection.tsx";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <NewTodo/>
        <TodoSection/>
    </Provider>
)
