/**
 * Hook para buscar espécies com paginação
 *
 * Responsabilidades:
 * - Carregar espécies ao montar o componente
 * - Gerenciar estados (loading, erro, paginação)
 * - Buscar dados na API
 * - Navegar entre páginas
 * - Tratar erros
 *
 */
import { useListagemPaginada } from "./base/useListagemPaginada"
import { buscarEspecies } from "../services/swapiApi"
import { mapearEspecies } from "../mappers/especiesMapper"

export function useEspecies() {
  const {
    dados: especies,
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
  } = useListagemPaginada(buscarEspecies, mapearEspecies, "espécies")

  return {
    especies,
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
