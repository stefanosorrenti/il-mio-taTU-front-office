//IMPORTS
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'motion/react'
import AppCard from '../components/AppCard'
import AppSpinner from '../components/AppSpinner'

export default function AppHomePage() {
    //State

    const [tattoos, setTattoos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    //Use Effect
    useEffect(() => {

        // Effettua operazioni al montaggio del componente
        axios.get('http://127.0.0.1:8000/api/tattoos')
            .then(response => {
                setTattoos(response.data.data)
            })
            .catch(error => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
                console.log('Operazione completata')
            })

    }, [])


    return (
        <div className="min-vh-100 bg-dark py-5">
            <div className="container">

                {/* Stato: errore */}
                {error && (
                    <div className="alert alert-danger d-flex align-items-center gap-2 border-0 rounded-3" role="alert">
                        <i className="bi bi-exclamation-triangle-fill fs-5"></i>
                        <span>Errore nel caricamento dei dati, si è verificato un problema.</span>
                    </div>
                )}

                {/* Stato: caricamento */}
                {loading && <AppSpinner />}

                {/* Stato: dati pronti */}
                {!loading && !error && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {tattoos.map((tattoo) => (
                            <motion.div
                                className="col"
                                key={tattoo.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, amount: 0.1 }}
                                
                            >
                                <AppCard tattoo={tattoo} />
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}