import { Link } from "react-router-dom"

export default function NavesList({ naves }) {
  return (
    <ul>
      {naves.map(nave => (
        <li key={nave.id}>
          <Link to={`/naves/${nave.id}`}>
            <div>
              <img
                src={nave.imagem}
                alt={nave.nome}
                className="card-image"
                onError={(e) => e.target.src = "/images/naves/placeholder.png"}
              />
              <div className="card-content">
                <h2>{nave.nome}</h2>
                <p><strong>Modelo:</strong> {nave.modelo}</p>
                <p><strong>Classe:</strong> {nave.classe}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
