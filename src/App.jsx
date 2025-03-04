import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store.js'

import Header from '@components/Header'
import TodoSection from "@features/Todos";
import CreateTaskButton from '@features/TaskHandler/CreateTaskButton'
import TaskHandler from '@features/TaskHandler/TaskHandler'

import './globals.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Header />
        <TodoSection />
        <CreateTaskButton />
        <TaskHandler />
    </Provider>
)
