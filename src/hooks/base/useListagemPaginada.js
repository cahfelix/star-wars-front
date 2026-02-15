/**
 * Hook genérico para buscar listagens paginadas na API
 *
 * Responsabilidades:
 * - Carregar dados ao montar o componente
 * - Gerenciar estados (loading, erro, página atual)
 * - Buscar dados na API com paginação
 * - Navegar entre páginas usando URL query params
 * - Tratar erros
 *
 * @param {Function} buscarFn - Função para buscar dados na API (deve aceitar parâmetro page)
 * @param {Function} mapearFn - Função para mapear dados da API
 * @param {string} nomeRecurso - Nome do recurso para mensagens de erro
 * @returns {Object} - { dados, loading, erro, paginaAtual, totalPaginas, proximaPagina, paginaAnterior, irParaPagina }
 *
 * Exemplo de uso:
 *
 * const { dados, loading, erro, paginaAtual, totalPaginas, proximaPagina, paginaAnterior } =
 *   useListagemPaginada(buscarPessoas, mapearPessoas, "pessoas")
 */
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export function useListagemPaginada(buscarFn, mapearFn, nomeRecurso = "dados") {
  const [searchParams, setSearchParams] = useSearchParams()
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [totalItens, setTotalItens] = useState(0)

  // Ler página da URL (padrão = 1)
  const paginaAtual = parseInt(searchParams.get("page") || "1", 10)

  useEffect(() => {
    let ativo = true

    async function carregar() {
      try {
        setLoading(true)
        setErro(null)

        const resposta = await buscarFn(paginaAtual)
        
        // A API retorna: { count, next, previous, results }
        const dadosBrutos = resposta.results ?? resposta
        const dadosMapeados = mapearFn(dadosBrutos)

        if (ativo) {
          setDados(dadosMapeados)
          setTotalItens(resposta.count || dadosMapeados.length)
          
          // Calcular total de páginas (API retorna 10 itens por página)
          if (resposta.count) {
            setTotalPaginas(Math.ceil(resposta.count / 10))
          }
        }
      } catch (err) {
        console.error(`Erro ao carregar ${nomeRecurso}:`, err)
        if (ativo) setErro(`Não foi possível carregar ${nomeRecurso}`)
      } finally {
        if (ativo) setLoading(false)
      }
    }

    carregar()

    return () => {
      ativo = false
    }
  }, [paginaAtual, buscarFn, mapearFn, nomeRecurso])

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
    dados,
    loading,
    erro,
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

