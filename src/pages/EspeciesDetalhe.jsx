import { useEspecieDetalhe } from "../hooks/useEspecieDetalhe"
import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import EspecieDetalheCard from "../components/EspecieDetalheCard"

export default function EspeciesDetalhe() {
  const { id } = useParams()
  const { item: especie, loading, erro } = useEspecieDetalhe(id)

  return (
    <PageLayout title="Detalhes da Espécie">
      <PageState
        loading={loading}
        erro={erro}
        empty={!especie}
      >
        <EspecieDetalheCard especie={especie} />
      </PageState>
    </PageLayout>
  )
}
