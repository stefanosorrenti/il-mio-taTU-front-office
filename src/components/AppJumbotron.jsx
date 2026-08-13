//IMPORTS
import { motion, useScroll, useTransform } from "motion/react"
import { Link } from "react-router-dom"
import { useRef } from "react"
export default function AppJumbotron() {
    const heroRef = useRef(null)
    // Framer Motion: progresso dello scroll relativo al Jumbotron
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })

    // Framer Motion: effetto di uscita (fade + slide-up + lieve zoom-out)
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const y = useTransform(scrollYProgress, [0, 1], [0, -140])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])


    return (



        <>

            <motion.div
                className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light position-relative overflow-hidden px-3"

                ref={heroRef}
                style={{ opacity, y, scale }}
            >
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

            </motion.div>


        </>

    )

}