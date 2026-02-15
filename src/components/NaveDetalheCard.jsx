export default function NaveDetalheCard({ nave }) {
  if (!nave) return null

  return (
    <div className="detail-card">
      <h2>{nave.nome}</h2>

      <p><strong>Modelo:</strong> {nave.modelo}</p>
      <p><strong>Classe:</strong> {nave.classe}</p>
      <p><strong>Passageiros:</strong> {nave.passageiros}</p>
      <p><strong>Velocidade:</strong> {nave.velocidade}</p>
      <p><strong>Autonomia:</strong> {nave.autonomia}</p>
      <p><strong>Comprimento:</strong> {nave.comprimento}</p>
      <p><strong>Capacidade de Carga:</strong> {nave.capacidadeCarga}</p>
      <p><strong>Consumíveis:</strong> {nave.consumiveis}</p>
    </div>
  )
}

