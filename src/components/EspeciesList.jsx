import { Link } from "react-router-dom"

export default function EspeciesList({ especies }) {
  return (
    <ul>
      {especies.map(especie => (
        <li key={especie.id}>
          <Link to={`/especies/${especie.id}`}>
            <div>
              <h2>{especie.nome}</h2>
              <p><strong>Classificação:</strong> {especie.classificacao}</p>
              <p><strong>Linguagem:</strong> {especie.linguagem}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
