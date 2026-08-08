export default function AppCard({ tattoo }) {
    return (
        <div className="card h-100">
            <img src={tattoo.image} className="card-img-top" alt={tattoo.title} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{tattoo.title}</h5>
                <p className="card-text">{tattoo.description}</p>
                <p className="card-text">Price: ${tattoo.price}</p>
                <a href={`/tattoos/${tattoo.id}`} className="btn  btn-outline-warning">Go somewhere</a>
            </div>
        </div>
    )
}