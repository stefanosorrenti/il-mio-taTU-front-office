import { Link } from "react-router-dom"
import { motion } from "motion/react"

export default function AppNotFoundPage() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-center px-3">
            <h1 className="display-1 fw-bold text-white">404</h1>
            <h2 className="h4 text-white fw-semibold mb-3">Pagina non trovata</h2>
            <hr className="border-secondary border-opacity-50 w-25" />
            <p className="text-secondary mb-4 col-md-5">
                La pagina che stai cercando non esiste o è stata spostata.
            </p>
        
            <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 }
                    }}
                    transition={{ duration: 0.1 }}
                >
                    <Link
                        to={"/"}
                        className="btn btn-outline-warning text-light rounded-3 px-4 py-2"
                    >
                        &larr; Torna alla Home
                    </Link>
                </motion.div>
        </div>
    )
}