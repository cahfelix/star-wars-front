import { usePessoaDetalhe } from "../hooks/usePessoaDetalhe"
import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import PessoaDetalheCard from "../components/PessoaDetalheCard"

export default function PessoasDetalhePage() {
  const { id } = useParams()
  const { item: pessoa, loading, erro } = usePessoaDetalhe(id)

  return (
    <PageLayout title="Detalhes da Pessoa">
      <PageState
        loading={loading}
        erro={erro}
        empty={!pessoa}
      >
        <PessoaDetalheCard pessoa={pessoa} />
      </PageState>
    </PageLayout>
  )
}
