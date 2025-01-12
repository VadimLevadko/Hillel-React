import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/index.esm.js';

import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="container p-4">
        <App />
    </main>
  </StrictMode>
)
