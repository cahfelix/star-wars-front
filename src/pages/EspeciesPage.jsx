import { useEspecies } from "../hooks/useEspecies"
import EspeciesList from "../components/EspeciesList"

export default function EspeciesPage() {
  const { especies, loading, erro } = useEspecies()

  if (loading) return <p className="loading">Carregando espécies...</p>

  if (erro) {
    return (
      <div>
        <p>{erro}</p>
      </div>
    )
  }

  if (especies.length === 0) return <p className="empty">Nenhuma especie encontrada.</p>

  return (
    <EspeciesList especies={especies} />
  )
}
