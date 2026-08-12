export default function AppInfoPage() {
    return (
        <>
            
            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-center px-3 gap-4">

                {/* Titolo */}
                <h1 className="display-1 fw-bold text-white">Chi <span className="text-warning">Siamo.</span></h1>

                {/* Informazioni sito */}
                <div className="card bg-black border border-secondary border-opacity-50 rounded-4 shadow text-center p-4 col-md-6">
                    <span className="badge bg-warning text-dark mb-3">Il Progetto</span>
                    <p className="text-secondary mb-0">
                        Il Mio TatTU è uno spazio dedicato alla cultura del tatuaggio:
                        una piattaforma dove gli artisti possono dare visibilità alle
                        proprie opere e gli appassionati possono scoprire nuove idee e
                        stili. Entra e lasciati ispirare da questo oceano di inchiostro.
                    </p>
                </div>

                {/* Informazioni community */}
                <div className="card bg-black border border-secondary border-opacity-50 rounded-4 shadow text-center p-4 col-md-6">
                    <span className="badge bg-warning text-dark mb-3">La Community</span>
                    <p className="text-secondary mb-0">
                        La nostra missione è creare una community inclusiva e accogliente
                        per tutti gli amanti del tatuaggio. Vogliamo promuovere la
                        creatività, l'arte e la cultura del tatuaggio, offrendo uno spazio
                        sicuro e rispettoso per condividere esperienze e conoscenze.
                    </p>
                </div>

                {/* Informazioni contatto */}
                <div className="card bg-black border border-secondary border-opacity-50 rounded-4 shadow text-center p-4 col-md-6">
                    <span className="badge bg-warning text-dark mb-3">Contatti</span>
                    <p className="text-secondary mb-0">
                        Per inviare i tuoi tatuaggi o per qualsiasi richiesta, contattaci via email all'indirizzo: <a className="text-warning text-decoration-none fw-semibold" href="mailto:info@ilmio-tattu.com">info@ilmio-tattu.com</a>
                    </p>
                </div>
            </div>
        </>
    )

}