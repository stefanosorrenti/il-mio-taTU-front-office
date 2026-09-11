//IMPORTS
import { motion } from "motion/react"
export default function AppJumbotron() {

    return (



        <>

            <div className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center text-center bg-black text-light position-relative overflow-hidden px-3 border-bottom border-warning border-top border-warning border-3 ">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="badge bg-warning text-dark text-uppercase px-3 py-2 mb-3"

                >
                    La comiunity del tuo tattoo
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="display-2 fw-bold mb-3"
                >
                    Il mio <span className="text-warning">tatTU</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lead mb-4"
                >
                    La piattaforma per condividere i tuoi tatuaggi e scoprire nuovi artisti.
                </motion.p>


            </div>


        </>

    )

}