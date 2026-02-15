import { Link } from "react-router-dom"

export default function PessoasList({ pessoas }) {
  return (
    <ul>
      {pessoas.map(pessoa => (
        <li key={pessoa.id}>
          <Link to={`/pessoas/${pessoa.id}`}>
            <div>
              <h2>{pessoa.nome}</h2>
              <p><strong>Sexo:</strong> {pessoa.sexo}</p>
              <p><strong>Ano:</strong> {pessoa.anoNascimento}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
