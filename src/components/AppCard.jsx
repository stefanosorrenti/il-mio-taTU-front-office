import { Link } from 'react-router-dom'

export default function AppCard({ tattoo }) {
    return (
        <div className="card h-100 bg-dark border border-secondary border-opacity-25 rounded-4 overflow-hidden shadow-lg">

            
            <div className="ratio ratio-1x1 bg-black">
                <img
                    src={tattoo.image_path}
                    alt={tattoo.title}
                    className="object-fit-cover w-100 h-100"
                />
            </div>

            <div className="card-body d-flex flex-column justify-content-between p-4">

                <h5 className="card-title text-warning fw-bold mb-1">{tattoo.title}</h5>

                <p className="card-text text-white-50 small mb-3">
                    {tattoo.description || 'Nessuna descrizione disponibile.'}
                </p>

                <hr className="border-secondary border-opacity-25 my-2" />

                {/* Artista */}
                <p className="text-white-50 small mb-3">
                    <span className="text-warning fw-semibold">
                        {tattoo.artist?.name} {tattoo.artist?.surname}
                    </span>
                    {tattoo.artist?.nationality?.name && (
                        <> &middot; {tattoo.artist.nationality.name}</>
                    )}
                </p>


                <Link
                    to={`/tattoos/${tattoo.id}`}
                    className="btn btn-outline-warning w-100 rounded-3 py-2 small mt-auto"
                >
                    Scopri di più &rarr;
                </Link>
            </div>
        </div>
    )
}