/**
 * Hook para buscar pessoas com paginação
 *
 * Responsabilidades:
 * - Carregar pessoas ao montar o componente
 * - Gerenciar estados (loading, erro, paginação)
 * - Buscar dados na API
 * - Navegar entre páginas
 * - Tratar erros
 *
 */
import { useListagemPaginada } from "./base/useListagemPaginada"
import { buscarPessoas } from "../services/swapiApi"
import { mapearPessoas } from "../mappers/pessoaMapper"

export function usePessoas() {
  const {
    dados: pessoas,
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
  } = useListagemPaginada(buscarPessoas, mapearPessoas, "pessoas")

  return {
    pessoas,
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
