import { createRoot } from 'react-dom/client'

import MainSection from './src/app/components/MainSection'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/index.esm.js';

createRoot(document.getElementById('root')).render(
    <main className="container">
        <MainSection />
    </main>
)
