//IMPORTS
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AppSingleTattooPage() {

    //Use Params
    const { id } = useParams();

    //Use Navigate
    const navigate = useNavigate();

    //Use State
    const [singleTattoo, setSingleTattoo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Use Effect
    useEffect(() => {

        // Effettua operazioni al montaggio del componente
        axios.get(`http://127.0.0.1:8000/api/tattoos/${id}`)
            .then(response => {
                //console.log(response.data.data);
                setSingleTattoo(response.data.data);
            })
            .catch(error => {
                //console.log(error.response.status);
                if (error.response?.status === 404) {
                    console.log('Risorsa non trovata, errore 404');
                    navigate('/'); // Reindirizza alla home
                } else {   
                    setError(true);
                }
            })

            .finally(() => {
                setLoading(false);
                console.log('Operazione completata');
            });


    }, []);



    return (
        <>
            {/* Gestione stato caricamento ed errori */}
            {error && <span className="text-danger">Errore nel caricamento dei dati, si è verificato un problema.</span>}

            {loading && <span>Caricamento in corso...</span>}
            {!loading && !error && singleTattoo && (
                <div>
                    <h2>{singleTattoo.title}</h2>
                    <p>{singleTattoo.description}</p>
                </div>
            )}
        </>
    )
}