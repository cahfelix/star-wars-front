import { getFilmImage } from "../helpers/images"

export default function FilmeDetalheCard({ filme }) {
  if (!filme) return null

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{filme.titulo}</h2>
      </div>

      <div className="detail-content">
        <div className="detail-image-container">
          <img
            src={getFilmImage(filme.id)}
            alt={filme.titulo}
            className="detail-image"
            onError={(e) => e.target.src = "/images/filmes/placeholder.png"}
          />
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Informações Gerais</h3>
            <p><strong>Ano de Lançamento:</strong> {filme.ano}</p>
            <p><strong>Diretor:</strong> {filme.diretor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}