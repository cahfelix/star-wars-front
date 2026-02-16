import { useFilmes } from "../hooks/useFilmes"
import FilmesList from "../components/FilmesList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import Paginacao from "../components/Paginacao"

export default function FilmesPage() {
  const {
    filmes,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = useFilmes()

  return (
    <PageLayout title="Filmes">
      <PageState
        loading={loading}
        erro={erro}
        empty={filmes.length === 0}
      >
        <FilmesList filmes={filmes} />
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