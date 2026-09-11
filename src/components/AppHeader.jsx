//IMPORTS
import logo from '../assets/images/logo.png'
import AppJumbotron from './AppJumbotron'
import { NavLink, useLocation, Link, } from 'react-router-dom'


export default function AppHeader() {

    //DATA
    /* Pathname */
    const { pathname } = useLocation()

    //FUNCTIONS

    //Funzione per scrollare alla sezione dei tatuaggi
    function handleScrollToTattoos() {
        const tattooCard = document.getElementById('tattoos-cards')
        if (tattooCard) {
            tattooCard.scrollIntoView({ behavior: 'smooth' })
            //console.log(tattooCard)
        }
    }

    return (
        <>
            <header className="bg-light shadow-sm">

                {/* NavBar */}
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container-fluid flex-md-column">

                        {/* Logo */}
                        <Link className="navbar-brand d-md-flex justify-content-md-center mx-0" to="/">
                            <img src={logo} alt="Logo" style={{ width: '200px' }} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Links Group */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">HOME</NavLink>
                                </li>
                                {pathname === '/' && (
                                    <li className="nav-item">
                                        <NavLink className="nav-link" onClick={handleScrollToTattoos}>TATTOO</NavLink>
                                    </li>
                                )}

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/info">CHI SIAMO</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                {/* Jumbotron */}
                {pathname === '/' && <AppJumbotron />}
            </header>
        </>
    )
}