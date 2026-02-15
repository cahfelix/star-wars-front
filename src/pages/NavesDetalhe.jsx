import { useNaveDetalhe } from "../hooks/useNaveDetalhe"
import { useParams } from "react-router-dom"

export default function NavesDetalhe() {
  const { id } = useParams()
  const { nave, loading, erro } = useNaveDetalhe(id)

  if (loading) return <p className="loading">Carregando detalhes...</p>

  if (erro) {
    return (
      <div>
        <p className="error">{erro}</p>
      </div>
    )
  }

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
