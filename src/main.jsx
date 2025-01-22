import { createRoot } from 'react-dom/client'
import ContactSection from './app/components/ContactSection/ContactSection.jsx'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
    <ContactSection />
)