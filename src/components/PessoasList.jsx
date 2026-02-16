import { Link } from "react-router-dom"

export default function PessoasList({ pessoas }) {
  return (
    <ul>
      {pessoas.map(pessoa => (
        <li key={pessoa.id}>
          <Link to={`/pessoas/${pessoa.id}`}>
            <div>
              <img
                src={pessoa.imagem}
                alt={pessoa.nome}
                className="card-image"
                onError={(e) => e.target.src = "/images/personagens/placeholder.png"}
              />
              <div className="card-content">
                <h2>{pessoa.nome}</h2>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
