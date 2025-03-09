import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";

import store from './features/store.js'
import Layout from './app/Layouts/Layout.jsx'

import './globals.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Layout />
    </Provider>
)
