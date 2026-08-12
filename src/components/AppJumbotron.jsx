//IMPORTS
import { motion } from "motion/react"
import { Link } from "react-router-dom"
export default function AppJumbotron() {
    return (
        <>

            <motion.div
                className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light position-relative overflow-hidden px-3"
            >
                <motion.span
                    className="badge bg-warning text-dark text-uppercase px-3 py-2 mb-3"

                >
                    La comiunity del tuo tattoo
                </motion.span>

                <motion.h1
                    className="display-2 fw-bold mb-3"
                >
                     Il mio <span className="text-warning">tatTU</span>
                </motion.h1>

                <motion.p
                    className="lead mb-4"
                >
                    La piattaforma per condividere i tuoi tatuaggi e scoprire nuovi artisti.
                </motion.p>


                <motion.div
                    className="btn btn-warning btn-lg text-dark text-uppercase px-4 py-2"
                    href="#"
                >
                    <Link to="/mamt" className="text-decoration-none text-dark">
                        Scopri di più
                    </Link>
                </motion.div>
            </motion.div>


        </>

    )

}