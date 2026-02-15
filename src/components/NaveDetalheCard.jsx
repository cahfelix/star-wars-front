export default function NaveDetalheCard({ nave }) {
  if (!nave) return null

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{nave.nome}</h2>
      </div>

      <div className="detail-image-container-horizontal">
        <img
          src={nave.imagem}
          alt={nave.nome}
          className="detail-image-horizontal"
          onError={(e) => e.target.src = "/images/naves/placeholder-naves.png"}
        />
      </div>

      <div className="detail-content-vertical">
        <div className="detail-info-grid">
          <div className="info-group">
            <h3>Especificações Técnicas</h3>
            <p><strong>Modelo:</strong> {nave.modelo}</p>
            <p><strong>Classe:</strong> {nave.classe}</p>
            <p><strong>Comprimento:</strong> {nave.comprimento} m</p>
            <p><strong>Velocidade:</strong> {nave.velocidade}</p>
          </div>

          <div className="info-group">
            <h3>Capacidade</h3>
            <p><strong>Passageiros:</strong> {nave.passageiros}</p>
            <p><strong>Capacidade de Carga:</strong> {nave.capacidadeCarga} kg</p>
            <p><strong>Consumíveis:</strong> {nave.consumiveis}</p>
            <p><strong>Autonomia:</strong> {nave.autonomia}</p>
          </div>

          <div className="info-group">
            <h3>Pilotos</h3>
            {nave.pilotos?.length > 0 ? (
              <p>{nave.pilotos.length} piloto(s) conhecido(s) - IDs: {nave.pilotos.join(', ')}</p>
            ) : (
              <p>Nenhum piloto conhecido</p>
            )}
          </div>

          <div className="info-group">
            <h3>Filmes</h3>
            {nave.filmes?.length > 0 ? (
              <p>Aparece em {nave.filmes.length} filme(s) - IDs: {nave.filmes.join(', ')}</p>
            ) : (
              <p>Não aparece em nenhum filme</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

