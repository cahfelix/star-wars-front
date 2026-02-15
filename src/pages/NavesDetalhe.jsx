import { useNaveDetalhe } from "../hooks/useNaveDetalhe"
import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import NaveDetalheCard from "../components/NaveDetalheCard"

export default function NavesDetalhe() {
  const { id } = useParams()
  const { item: nave, loading, erro } = useNaveDetalhe(id)

  return (
    <PageLayout title="Detalhes da Nave">
      <PageState
        loading={loading}
        erro={erro}
        empty={!nave}
      >
        <NaveDetalheCard nave={nave} />
      </PageState>
    </PageLayout>
  )
}
