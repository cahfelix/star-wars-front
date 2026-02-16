/**
 * Hook genérico para paginação do lado do cliente
 * 
 * Responsabilidades:
 * - Gerenciar página atual via URL query params
 * - Calcular fatias de dados para exibir
 * - Fornecer funções de navegação entre páginas
 * - Scroll automático ao mudar de página
 * 
 * Usado quando a API retorna todos os dados de uma vez
 * (diferente de useListagemPaginada que usa paginação da API)
 * 
 * @param {Array} todosItens - Array completo de itens
 * @param {number} itensPorPagina - Quantidade de itens por página (padrão: 12)
 * @returns {Object} - { itens, paginaAtual, totalPaginas, totalItens, proximaPagina, paginaAnterior, irParaPagina, temProxima, temAnterior }
 * 
 * Exemplo de uso:
 * 
 * const [todosPersonagens, setTodosPersonagens] = useState([])
 * const { 
 *   itens: pessoas, 
 *   paginaAtual, 
 *   totalPaginas,
 *   proximaPagina,
 *   paginaAnterior 
 * } = usePaginacaoCliente(todosPersonagens, 12)
 */
import { useSearchParams } from "react-router-dom"

export function usePaginacaoCliente(todosItens, itensPorPagina = 12) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Ler página da URL (padrão = 1)
  const paginaAtual = parseInt(searchParams.get("page") || "1", 10)

  // Calcular paginação
  const totalItens = todosItens.length
  const totalPaginas = Math.ceil(totalItens / itensPorPagina)
  const inicio = (paginaAtual - 1) * itensPorPagina
  const fim = inicio + itensPorPagina
  const itens = todosItens.slice(inicio, fim)

  // Funções de navegação
  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setSearchParams({ page: (paginaAtual + 1).toString() })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setSearchParams({ page: (paginaAtual - 1).toString() })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const irParaPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setSearchParams({ page: numeroPagina.toString() })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return {
    itens,
    paginaAtual,
    totalPaginas,
    totalItens,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima: paginaAtual < totalPaginas,
    temAnterior: paginaAtual > 1
  }
}

