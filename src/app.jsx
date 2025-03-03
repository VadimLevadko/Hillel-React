import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store.js'
import NewTodo from './app/components/NewTodo'

import './globals.css'

import TodoSection from "./features/Todos/TodoSection.tsx";
import CreateTaskButton from './features/CreateTaskButton'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <TodoSection/>
        <CreateTaskButton />
        <NewTodo/>
    </Provider>
)
