import { useNaves } from "../hooks/useNaves"
import NavesList from "../components/NavesList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"
import Paginacao from "../components/Paginacao"

export default function NavesPage() {
  const {
    naves,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = useNaves()

  return (
    <PageLayout title="Naves">
      <PageState
        loading={loading}
        erro={erro}
        empty={naves.length === 0}
      >
        <NavesList naves={naves} />
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