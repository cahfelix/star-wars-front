import { useEspecies } from "../hooks/useEspecies"
import EspeciesList from "../components/EspeciesList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import Paginacao from "../components/Paginacao"

export default function EspeciesPage() {
  const {
    especies,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = useEspecies()

  return (
    <PageLayout title="Especies">
      <PageState
        loading={loading}
        erro={erro}
        empty={especies.length === 0}
      >
        <EspeciesList especies={especies} />
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