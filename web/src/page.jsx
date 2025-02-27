import { createRoot } from 'react-dom/client'

import MainSection from './app/components/MainSection/index.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/index.esm.js';

createRoot(document.getElementById('root')).render(
    <main className="container">
        <MainSection />
    </main>
)
