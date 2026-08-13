//IMPORTS
import AppAnimatedSmallCard from "../components/AppAnimatedSmallCard";
import { motion } from "framer-motion";

//DATA

const emailInfo = "<a className='text-warning text-decoration-none fw-semibold' href='mailto:info@ilmio-tattu.com'>info@ilmio-tattu.com</a>"

export default function AppInfoPage() {
    return (
        <>

            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-center px-3 gap-4">

                {/* Titolo */}
                <motion.h1 className="display-1 fw-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >   
                    Chi <span className="text-warning">Siamo.</span>
                </motion.h1>

                {/* Sottotitolo */}
                <motion.small className="lead text-secondary mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Clicca o passa sopra con il mouse su una card per visualizzare ulteriori informazioni.
                </motion.small>

                {/* Informazioni sito */}
                <AppAnimatedSmallCard title="Il Progetto" description="Il Mio TatTU è uno spazio dedicato alla cultura del tatuaggio:
                        una piattaforma dove gli artisti possono dare visibilità alle
                        proprie opere e gli appassionati possono scoprire nuove idee e
                        stili. Entra e lasciati ispirare da questo oceano di inchiostro." />

                {/* Informazioni community */}
                <AppAnimatedSmallCard title="La community" description="La nostra missione è creare una community inclusiva e accogliente
                        per tutti gli amanti del tatuaggio. Vogliamo promuovere la
                        creatività, l'arte e la cultura del tatuaggio, offrendo uno spazio
                        sicuro e rispettoso per condividere esperienze e conoscenze." />


                {/* Informazioni contatto */}
                <AppAnimatedSmallCard title="Contatti" description={`Per inviare i tuoi tatuaggi o per qualsiasi richiesta, contattaci via email all'indirizzo: ${emailInfo}`} />
            </div>
        </>
    )

}