import { Link } from "react-router-dom"

export default function FilmesList({ filmes }) {
  return (
    <ul>
      {filmes.map(filme => (
        <li key={filme.id}>
          <Link to={`/filmes/${filme.id}`}>
            <div>
              <img
                src={filme.imagem}
                alt={filme.titulo}
                className="card-image"
                onError={(e) => e.target.src = "/images/filmes/placeholder.png"}
              />
              <div className="card-content">
                <h2>{filme.titulo}</h2>
                <p><strong>Ano:</strong> {filme.ano}</p>
                <p><strong>Diretor:</strong> {filme.diretor}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}