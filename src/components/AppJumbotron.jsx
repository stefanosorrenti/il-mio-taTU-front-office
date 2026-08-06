import { motion } from "motion/react"
export default function AppJumbotron() {
    return (
        <>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center py-5"
            >
                <h1 className="text-primary">Il mio tatTU</h1>
                <p className="text-secondary">
                    Scopri i migliori tattoo di tutto il mondo inviati direttamente dalla nostra community.
                </p>
            </motion.div>

            
        </>

    )

}