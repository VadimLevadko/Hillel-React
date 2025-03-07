import { createRoot } from 'react-dom/client'

import MainSection from './app/components/MainSection'

createRoot(document.getElementById('root')).render(
    <main className="container">
        <MainSection />
    </main>
)
