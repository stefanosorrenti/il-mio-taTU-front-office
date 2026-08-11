//IMPORTS
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import AppSpinner from '../components/AppSpinner';
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
        <div className="min-vh-100 bg-black d-flex align-items-center justify-content-center py-5" data-bs-theme="dark">

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
            {!loading && !error && singleTattoo && (
                <div className="container py-5">

                    {/* Bottone torna indietro */}
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline-secondary rounded-3 py-2 px-4 mb-4 small"
                    >
                        &larr; Torna indietro
                    </button>

                    <div className="row g-4 g-lg-5 align-items-start">

                        {/* Colonna sinistra: immagine */}
                        <div className="col-12 col-lg-5">
                            <div className="ratio ratio-1x1 rounded-4 overflow-hidden border border-secondary border-opacity-50 shadow-sm">
                                <img
                                    src={singleTattoo.image_path}
                                    alt={singleTattoo.title}
                                    className="object-fit-cover w-100 h-100"
                                />
                            </div>
                        </div>

                        {/* Colonna destra: dettagli */}
                        <div className="col-12 col-lg-7">

                            
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                {singleTattoo.styles?.length > 0
                                    ? singleTattoo.styles.map((style, i) => (
                                        <span key={i} className="badge bg-secondary bg-opacity-10 text-light border border-secondary border-opacity-50 rounded-pill px-3 py-2 small fw-normal">
                                            {style.name}
                                        </span>
                                    ))
                                    : <span className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-50 rounded-pill px-3 py-2 small fw-normal">Stile N/A</span>
                                }
                            </div>

                            
                            <h1 className="text-white fw-semibold display-5 mb-2">
                                {singleTattoo.title}
                            </h1>

                            
                            <p className="text-secondary mb-4">
                                {singleTattoo.description || 'Nessuna descrizione disponibile.'}
                            </p>

                            <hr className="border-secondary border-opacity-50 my-4" />

                            
                            <div className="mb-4">
                                <p className="text-uppercase text-secondary small fw-semibold mb-3">Artista</p>
                                <p className="text-light fw-semibold fs-5 mb-1">
                                    {singleTattoo.artist?.name} {singleTattoo.artist?.surname}
                                </p>
                                <p className="text-secondary mb-0">
                                    {singleTattoo.artist?.nationality?.name} &middot; {singleTattoo.artist?.age} anni
                                </p>
                            </div>

                            <hr className="border-secondary border-opacity-50 my-4" />

                            {/* Prezzo e Durata */}
                            <div className="row g-3 mb-5">
                                <div className="col-6 col-sm-4">
                                    <div className="bg-dark rounded-4 p-3 text-center border border-secondary border-opacity-50 shadow-sm">
                                        <p className="text-secondary small mb-1 text-uppercase">Prezzo</p>
                                        <p className="text-light fw-semibold fs-4 mb-0">${singleTattoo.price}</p>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <div className="bg-dark rounded-4 p-3 text-center border border-secondary border-opacity-50 shadow-sm">
                                        <p className="text-secondary small mb-1 text-uppercase">Durata</p>
                                        <p className="text-light fw-semibold fs-4 mb-0">
                                            {singleTattoo.time ? `${singleTattoo.time} min` : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="btn btn-outline-secondary text-light w-100 rounded-3 py-3 fw-semibold fs-5">
                                Invia ad un amico &rarr;
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}