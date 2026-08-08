//IMPORTS
import { useState, useEffect } from 'react'
import axios from 'axios'
import AppCard from '../components/AppCard'

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
        <>
        
                {/* Condizione per la gestione di errori e caricamento */}
                {error && <span className="text-danger">Errore nel caricamento dei dati</span>}
                {loading && <span className="text-warning">Caricamento in corso...</span>}
                {!loading && !error && (

                    <div className="row row-cols-1 row-cols-md-3 g-3 p-3">
                        {tattoos.map(tattoo => (
                            <div className="col" key={tattoo.id}>
                                <AppCard  tattoo={tattoo} />
                            </div>
                        ))}
                    </div>
                )

                }

            

        </>
    )
}