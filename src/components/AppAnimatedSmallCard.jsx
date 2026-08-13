//IMPORTS
import { motion } from "framer-motion"

export default function AppAnimatedSmallCard({ title, description }) {

    return (


        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card bg-black border border-secondary border-opacity-50 rounded-4 shadow text-center p-4 col-md-6 position-relative overflow-hidden"
            whileHover="hovered" // Passo lo stato "hovered" ai figli
        >

            {/* Titolo */}
            <motion.span
                /* Mappo l'hovered */
                variants={{
                    hovered: { opacity: 0, scale: 0.8, transition: { duration: 0.25 } },
                }}
                className="badge bg-warning text-dark position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center fs-4 fw-semibold text-uppercase rounded-4"
            >
                {title}
            </motion.span>

            {/* Descrizione */}
            <motion.p
                /* Mappo l'hovered */
                variants={{
                    hovered: { opacity: 1, y: 0, transition: { duration: 0.25, delay: 0.1 } },
                }}
                initial={{ opacity: 0, y: 10 }}
                className="text-secondary mb-0"
            >
                {description}
            </motion.p>
        </motion.div>


    )
}