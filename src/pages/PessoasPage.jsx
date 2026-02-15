import { usePessoas } from "../hooks/usePessoas"
import PessoasList from "../components/PessoasList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import Paginacao from "../components/Paginacao"

export default function PessoasPage() {
  const {
    pessoas,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = usePessoas()

  return (
    <PageLayout title="Pessoas">
      <PageState
        loading={loading}
        erro={erro}
        empty={pessoas.length === 0}
      >
        <PessoasList pessoas={pessoas} />
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          proximaPagina={proximaPagina}
          paginaAnterior={paginaAnterior}
          irParaPagina={irParaPagina}
          temProxima={temProxima}
          temAnterior={temAnterior}
        />
      </PageState>
    </PageLayout>
  )
}