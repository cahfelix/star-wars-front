import { useListagemPaginada } from "./base/useListagemPaginada"
import { buscarFilmes } from "../services/swapiApi"
import { mapearFilmes } from "../mappers/filmesMapper"

export function useFilmes() {
  const {
    dados: filmes,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    totalItens,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = useListagemPaginada(buscarFilmes, mapearFilmes, "filmes")

  return {
    filmes,
    loading,
    erro,
    paginaAtual,
    totalPaginas,
    totalItens,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  }
}
