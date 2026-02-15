/**
 * Hook para buscar naves com paginação
 *
 * Responsabilidades:
 * - Carregar naves ao montar o componente
 * - Gerenciar estados (loading, erro, paginação)
 * - Buscar dados na API
 * - Navegar entre páginas
 * - Tratar erros
 *
 */
import { useListagemPaginada } from "./base/useListagemPaginada"
import { buscarNaves } from "../services/swapiApi"
import { mapearNaves } from "../mappers/navesMapper"

export function useNaves() {
  const {
    dados: naves,
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
  } = useListagemPaginada(buscarNaves, mapearNaves, "naves")

  return {
    naves,
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
