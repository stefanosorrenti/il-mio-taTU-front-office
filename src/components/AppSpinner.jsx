export default function AppSpinner() {
    return (
        
        <div className="text-center text-secondary">
            <div className="spinner-border text-warning mb-3" role="status">
                <span className="visually-hidden">Caricamento...</span>
            </div>
            <p className="text-white-50 small">Caricamento in corso...</p>
        </div>

    )
}