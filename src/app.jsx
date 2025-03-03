import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store.js'

import Header from './app/components/Header'
import TodoSection from "./features/Todos/TodoSection.tsx";
import CreateTaskButton from './features/CreateTaskButton'
import TaskHandler from './app/components/TaskHandler'

import './globals.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Header />
        <TodoSection />
        <CreateTaskButton />
        <TaskHandler />
    </Provider>
)
