import './Burger.css'

export default function Header() {
    return (
        <header className="header sticky-top">
            <nav className="navbar bg-light-purple text-dark-purple azm-navbar">
                <div className="container">
                    <div>
                        <h1 className="fs-2 fw-bold mb-0">Vadim Levadko</h1>
                        <span className="fw-bold fs-6">Junior Front-end developer</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fs-5 ms-auto mb-2 mb-lg-0 text-center mt-3">
                            <li className="nav-item"><a className="text-reset text-decoration-none" href="#about">About</a></li>
                            <li className="nav-item"><a className="text-reset text-decoration-none" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="text-reset text-decoration-none" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="text-reset text-decoration-none" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}