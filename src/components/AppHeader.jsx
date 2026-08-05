//IMPORTS
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'


export default function AppHeader() {
    return (
        <>
            <header>
                {/* NavBar */}
                
                <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
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
                                    <NavLink className="nav-link" to="/">LINK</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">LINK</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">LINK</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}