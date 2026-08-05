//IMPORTS
import logo from '../assets/images/logo.png'


export default function AppHeader() {
    return (
        <>
            <header>
                {/* NavBar */}
                <nav className="navbar navbar-expand-md bg-body-light">
                    <div className="container-fluid flex-md-column">

                        {/* Logo */}
                        <a className="navbar-brand d-md-flex justify-content-md-center mx-0" href="#">
                            <img src={logo} alt="Logo" style={{ width: '200px'  }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Links Group */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">LINK</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LINK</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LINK</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}