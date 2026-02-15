import { usePessoaDetalhe } from "../hooks/usePessoaDetalhe"
import { usePersonagensRelacionados } from "../hooks/usePersonagensRelacionados"
import { useParams } from "react-router-dom"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import PessoaDetalheCard from "../components/PessoaDetalheCard"
import PessoasList from "../components/PessoasList"

export default function PessoasDetalhePage() {
  const { id } = useParams()
  const { item: pessoa, loading, erro } = usePessoaDetalhe(id)
  const { personagens: relacionados } = usePersonagensRelacionados(id, 3)

  return (
    <PageLayout title="Detalhes da Pessoa">
      <PageState
        loading={loading}
        erro={erro}
        empty={!pessoa}
      >
        <PessoaDetalheCard pessoa={pessoa} />

        {relacionados.length > 0 && (
          <div className="related-section">
            <h2>Veja outros personagens</h2>
            <PessoasList pessoas={relacionados} />
          </div>
        )}
      </PageState>
    </PageLayout>
  )
}
