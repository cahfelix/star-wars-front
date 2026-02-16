/**
 * Hook para buscar pessoas
 *
 * Responsabilidades:
 * - Carregar pessoas da API
 * - Gerenciar estados (loading, erro)
 * - Mapear dados da API para formato da aplicação
 *
 * NOVA API: Usa a API com imagens incluídas
 * Paginação delegada para usePaginacaoCliente
 */
import { useEffect, useState } from "react"
import { buscarTodosPersonagens } from "../services/starwarsCharactersApi"
import { mapearPessoas } from "../mappers/pessoaMapperNew"
import { usePaginacaoCliente } from "./base/usePaginacaoCliente"

export function usePessoas() {
  const [todosPersonagens, setTodosPersonagens] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  // Carregar todos os personagens uma vez
  useEffect(() => {
    let ativo = true

    async function carregar() {
      try {
        setLoading(true)
        setErro(null)

        const resposta = await buscarTodosPersonagens()
        const personagensMapeados = mapearPessoas(resposta)

        if (ativo) {
          setTodosPersonagens(personagensMapeados)
        }
      } catch (err) {
        console.error("Erro ao carregar pessoas:", err)
        if (ativo) setErro("Não foi possível carregar pessoas")
      } finally {
        if (ativo) setLoading(false)
      }
    }

    carregar()

    return () => {
      ativo = false
    }
  }, [])

  // Delegar paginação para hook genérico
  const {
    itens: pessoas,
    paginaAtual,
    totalPaginas,
    totalItens,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
    temProxima,
    temAnterior
  } = usePaginacaoCliente(todosPersonagens, 12)

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
