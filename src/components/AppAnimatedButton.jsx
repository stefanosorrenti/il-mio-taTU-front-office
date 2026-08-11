import { motion } from 'framer-motion'

export default function AppAnimatedButton({ text, onClick, className = '' }) {
    return (
        <motion.button
            className={className}
            onClick={onClick}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
            }}
            transition={{ duration: 0.1 }}
        >
            {text}
        </motion.button>
    )
}