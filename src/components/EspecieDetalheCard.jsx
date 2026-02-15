import { getSpeciesImage } from "../helpers/images"
import { obterNomePlaneta } from "../helpers/nomes"

export default function EspecieDetalheCard({ especie }) {
  if (!especie) return null

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{especie.nome}</h2>
      </div>

      <div className="detail-content">
        <div className="detail-image-container">
          <img
            src={getSpeciesImage(especie.id)}
            alt={especie.nome}
            className="detail-image"
            onError={(e) => e.target.src = "/images/especies/placeholder.png"}
          />
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Informações Gerais</h3>
            <p><strong>Classificação:</strong> {especie.classificacao || "Desconhecido"}</p>
            <p><strong>Designação:</strong> {especie.designacao || "Desconhecido"}</p>
            <p><strong>Linguagem:</strong> {especie.linguagem || "Desconhecido"}</p>
          </div>

          <div className="info-group">
            <h3>Características Físicas</h3>
            <p><strong>Altura Média:</strong> {especie.mediaAltura ? `${especie.mediaAltura} cm` : "Desconhecido"}</p>
            <p><strong>Expectativa de Vida:</strong> {especie.mediaVida ? `${especie.mediaVida} anos` : "Desconhecido"}</p>
          </div>

          <div className="info-group">
            <h3>Origem</h3>
            <p><strong>Planeta de Origem:</strong> {especie.planetaOrigemId ? obterNomePlaneta(especie.planetaOrigemId) : "Desconhecido"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

