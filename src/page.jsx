import { createRoot } from 'react-dom/client'

import Header from './src/app/components/Header'
import About from './src/app/components/About'
import Skills from './src/app/components/Skills'
import Projects from './src/app/components/Projects'
import Contact from './src/app/components/Contact'
import Footer from './src/app/components/Footer'

import 'bootstrap/dist/css/bootstrap.css';
import './src/app/style.scss'
import 'bootstrap/js/index.esm.js';

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <main className="container">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </>
)
