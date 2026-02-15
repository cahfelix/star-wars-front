export default function NaveDetalheCard({ nave }) {
  if (!nave) return null

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{nave.nome}</h2>
      </div>

      <div className="detail-content">
        <div className="detail-image-container">
          <img
            src={nave.imagem}
            alt={nave.nome}
            className="detail-image"
            onError={(e) => e.target.src = "/images/naves/placeholder-naves.png"}
          />
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Especificações Técnicas</h3>
            <p><strong>Modelo:</strong> {nave.modelo}</p>
            <p><strong>Classe:</strong> {nave.classe}</p>
            <p><strong>Comprimento:</strong> {nave.comprimento} m</p>
            <p><strong>Velocidade:</strong> {nave.velocidade}</p>
          </div>

          <div className="info-group">
            <h3>Produção</h3>
            <p><strong>Fabricante:</strong> {nave.fabricante}</p>
            <p><strong>Custo:</strong> {nave.custo !== "unknown" ? `${nave.custo} créditos` : "Desconhecido"}</p>
            <p><strong>Tripulação:</strong> {nave.tripulacao} pessoa(s)</p>
          </div>

          <div className="info-group">
            <h3>Capacidade</h3>
            <p><strong>Passageiros:</strong> {nave.passageiros}</p>
            <p><strong>Capacidade de Carga:</strong> {nave.capacidadeCarga} kg</p>
            <p><strong>Consumíveis:</strong> {nave.consumiveis}</p>
          </div>

          <div className="info-group">
            <h3>Performance</h3>
            <p><strong>Hyperdrive:</strong> {nave.hyperdrive !== "unknown" ? `Classe ${nave.hyperdrive}` : "Não possui"}</p>
            <p><strong>MGLT:</strong> {nave.autonomia}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

