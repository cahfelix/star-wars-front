import { useNaves } from "../hooks/useNaves"
import NavesList from "../components/NavesList"

export default function NavesPage() {
  const { naves, loading, erro } = useNaves()

  if (loading) return <p className="loading">Carregando naves...</p>

  if (erro) {
    return (
      <div>
        <p>{erro}</p>
      </div>
    )
  }

  if (naves.length === 0) return <p className="empty">Nenhuma nave encontrada.</p>

  return (
    <NavesList naves={naves} />
  )
}
