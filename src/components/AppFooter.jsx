export default function AppFooter() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-body-secondary border-top py-4 mt-auto shadow-sm">
                <div className="container-fluid">

                    {/* INFO */}
                    <div className="d-flex flex-column align-items-center justify-content-between gap-2">
                        <a href="https://github.com/stefanosorrenti" target="_blank" className="text-muted" aria-label="GitHub">
                            <i className="bi bi-github fs-1"></i>
                        </a>
                        <p className="mb-0 text-muted small">
                            &copy; {new Date().getFullYear()} il mio taTU &mdash; Tutti i diritti riservati. Riproduzione vietata senza autorizzazione.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}