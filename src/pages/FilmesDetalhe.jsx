import { useFilmeDetalhe } from "../hooks/useFilmeDetalhe"
import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import FilmeDetalheCard from "../components/FilmeDetalheCard"

export default function FilmesDetalhe() {
  const { id } = useParams()
  const { item: filme, loading, erro } = useFilmeDetalhe(id)

  return (
    <PageLayout title="Detalhes do Filme">
      <PageState
        loading={loading}
        erro={erro}
        empty={!filme}
      >
        <FilmeDetalheCard filme={filme} />
      </PageState>
    </PageLayout>
  )
}
