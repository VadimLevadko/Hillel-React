import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <img width="180px" height="80px" src="https://upload.wikimedia.org/wikipedia/commons/archive/0/0f/20210314042008%21Sewayaki_Kitsune_no_Senko-san_logo.svg" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                         aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <img width="80px" height="30px"
                                 src="https://upload.wikimedia.org/wikipedia/commons/archive/0/0f/20210314042008%21Sewayaki_Kitsune_no_Senko-san_logo.svg"
                                 alt="logo"/>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Select by genre
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="#">
                                            Isekai
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">Romance</a></li>
                                        <li><a className="dropdown-item" href="#">Fantasy</a></li>
                                        <li><a className="dropdown-item" href="#">Slice of Life</a></li>
                                        <li><a className="dropdown-item" href="#">Adventure</a></li>
                                        <li><a className="dropdown-item" href="#">Comedy</a></li>
                                        <li><a className="dropdown-item" href="#">Drama</a></li>
                                        <li><a className="dropdown-item" href="#">Horror</a></li>
                                        <li><a className="dropdown-item" href="#">Mystery</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">What are the genres?</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}