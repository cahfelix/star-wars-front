import { Link } from "react-router-dom"

export default function NavesList({ naves }) {
  return (
    <ul>
      {naves.map(nave => (
        <li key={nave.id}>
          <Link to={`/naves/${nave.id}`}>
            <div>
              <h2>{nave.nome}</h2>
              <p><strong>Modelo:</strong> {nave.modelo}</p>
              <p><strong>Classe:</strong> {nave.classe}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
