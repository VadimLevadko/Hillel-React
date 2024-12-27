import React from 'react';

import './AsideNavigation.css'

export default class AsideNavigation extends React.Component {
    render() {
        return (
            <aside className="aside-navigation w-100 overflow-y-auto position-sticky vh-100">
                <div>
                    <header className="aside-logo-wrapper d-flex align-items-center mb-2">
                        <img width="80px" height="30px"
                             src="https://upload.wikimedia.org/wikipedia/commons/archive/0/0f/20210314042008%21Sewayaki_Kitsune_no_Senko-san_logo.svg"
                             alt="logo"/>
                        <h2 className="fs-6 aside-site-title">Senko Heaven</h2>
                    </header>
                    <nav className="d-flex flex-column gap-4">
                        <div className="nav-block-wrapper">
                            <h2 className="fs-5">Base navigation</h2>
                            <ul className="list-group">
                                <li className="list-group-item active" aria-current="true">Home</li>
                                <li className="list-group-item" aria-current="false">About us</li>
                                <li className="list-group-item" aria-current="false">Help us</li>
                            </ul>
                        </div>
                        <div className="nav-block-wrapper">
                            <h2 className="fs-5">Categories</h2>
                            <ul className="list-group">
                                <li className="list-group-item" aria-current="false">🎞️ New Releases</li>
                                <li className="list-group-item" aria-current="false">📺 Popular Anime</li>
                                <li className="list-group-item" aria-current="false">🕒 Ongoing</li>
                                <li className="list-group-item" aria-current="false">🎬 Movies</li>
                                <li className="list-group-item" aria-current="false">
                                    🔍 By Genre:
                                    <ul className="under-list-group">
                                        <li className="list-group-item" aria-current="false">❤️ Romance</li>
                                        <li className="list-group-item" aria-current="false">⚔️ Action</li>
                                        <li className="list-group-item" aria-current="false">🧙 Fantasy</li>
                                        <li className="list-group-item" aria-current="false">👻 Mystery</li>
                                        <li className="list-group-item" aria-current="false">🤣 Comedy</li>
                                        <li className="list-group-item" aria-current="false">🧠 Psychological</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-block-wrapper">
                            <h2 className="fs-5">User Tools</h2>
                            <ul className="list-group">
                                <li className="list-group-item" aria-current="false">📝 Watchlist</li>
                                <li className="list-group-item" aria-current="false">⭐ Favorites</li>
                                <li className="list-group-item" aria-current="false">📊 Anime Ratings</li>
                                <li className="list-group-item" aria-current="false">🔔 Notifications</li>
                            </ul>
                        </div>
                        <div className="nav-block-wrapper">
                            <h2 className="fs-5">Community</h2>
                            <ul className="list-group">
                                <li className="list-group-item" aria-current="false">💬 Fan Forum</li>
                                <li className="list-group-item" aria-current="false">🖼️ Fan Art Gallery</li>
                                <li className="list-group-item" aria-current="false">🎮 Games & Contests</li>
                            </ul>
                        </div>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                        <div className="nav-block-wrapper">
                            <h2 className="fs-5">Miscellaneous</h2>
                            <ul className="list-group">
                                <li className="list-group-item" aria-current="false">🛠️ About the Site</li>
                                <li className="list-group-item" aria-current="false">📄 Terms of Service</li>
                                <li className="list-group-item" aria-current="false">💌 Contact Us</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        )
    }
}