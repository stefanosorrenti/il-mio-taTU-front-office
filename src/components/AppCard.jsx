import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AppCard({ tattoo }) {
    return (
        
        //Animazione della card 
        <motion.div className="card h-100 bg-black border border-secondary border-opacity-50 rounded-4 overflow-hidden shadow" data-bs-theme="dark"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}

        >


            <div className="ratio ratio-1x1 bg-black">
                <img
                    src={tattoo.image_path}
                    alt={tattoo.title}
                    className="object-fit-cover w-100 h-100"
                />
            </div>

            <div className="card-body d-flex flex-column justify-content-between p-4">

                <h5 className="card-title text-white fw-semibold mb-2">{tattoo.title}</h5>

                <p className="card-text text-secondary small mb-3">
                    {tattoo.description || 'Nessuna descrizione disponibile.'}
                </p>

                <hr className="border-secondary border-opacity-50 my-2" />

                {/* Artista */}
                <p className="text-secondary small mb-3">
                    <span className="text-light fw-semibold">
                        {tattoo.artist?.name} {tattoo.artist?.surname}
                    </span>
                    {tattoo.artist?.nationality?.name && (
                        <> &middot; {tattoo.artist.nationality.name}</>
                    )}
                </p>

                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 }
                    }}
                    transition={{ duration: 0.1 }}
                >
                    <Link
                        to={`/tattoos/${tattoo.id}`}
                        className="btn btn-outline-warning text-light w-100 rounded-3 py-2 small mt-auto"
                    >
                        Scopri di più &rarr;
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}