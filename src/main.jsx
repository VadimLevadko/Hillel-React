import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/index.esm.js';

import './main.css'

import Header from './app/components/Header/Header.jsx'
import Footer from './app/components/Footer/Footer.jsx'
import AsideNavigation from "./app/components/AsideNavigation/AsideNavigation.jsx";
import MostPopularSection from "./app/components/AnimeContent/MostPopularSection/MostPopularSection.jsx";

import mostPopularData from "./data/animeSections/mostPopular/mostPopular.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <div className="container layout-wrapper d-flex gap-5">
            <AsideNavigation />
            <main className="main d-flex flex-wrap">
                <MostPopularSection mostPopularData = { mostPopularData } />
            </main>
        </div>
        <Footer />
    </StrictMode>,
)
