import { createRoot } from 'react-dom/client'

import AppRouter from './src/router/AppRouter.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/index.esm.js';

createRoot(document.getElementById('root')).render(
    <AppRouter />
)
