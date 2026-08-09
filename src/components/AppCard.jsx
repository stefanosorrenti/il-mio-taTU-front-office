import { Link } from 'react-router-dom'

export default function AppCard({ tattoo }) {
    return (
        <div className="card h-100">
            <img src={tattoo.image_path} className="card-img-top" alt={tattoo.title} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{tattoo.title}</h5>
                <p className="card-text">{tattoo.description}</p>
                <p className="card-text">Price: ${tattoo.price}</p>
                <Link to={`/tattoos/${tattoo.id}`} className="btn  btn-outline-warning">Go somewhere</Link>
            </div>
        </div>
    )
}