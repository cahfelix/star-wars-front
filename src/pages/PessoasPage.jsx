import { usePessoas } from "../hooks/usePessoas"
import PessoasList from "../components/PessoasList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"

export default function PessoasPage() {
  const { pessoas, loading, erro } = usePessoas()

  return (
    <PageLayout title="Pessoas">
      <PageState
        loading={loading}
        erro={erro}
        empty={pessoas.length === 0}
      >
        <PessoasList pessoas={pessoas} />
      </PageState>
    </PageLayout>
  )
}