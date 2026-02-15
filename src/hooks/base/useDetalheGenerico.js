/**
 * Hook genérico para buscar detalhes de um item na API
 * 
 * Responsabilidades:
 * - Carregar detalhes do item ao receber o ID
 * - Gerenciar estados (loading, erro)
 * - Validar ID antes de buscar
 * - Buscar dados na API
 * - Mapear dados da API
 * - Tratar erros
 * 
 * @param {string} id - ID do item a ser buscado
 * @param {Function} buscarPorIdFn - Função para buscar item por ID na API
 * @param {Function} mapearFn - Função para mapear dados da API
 * @param {string} nomeRecurso - Nome do recurso para mensagens de erro
 * @returns {Object} - { item, loading, erro }
 * 
 * Exemplo de uso:
 * 
 * const { item: pessoa, loading, erro } = useDetalheGenerico(
 *   id,
 *   buscarPessoaPorId,
 *   mapearPessoa,
 *   "Pessoa"
 * )
 */

import { useEffect, useState } from "react"

export function useDetalheGenerico(id, buscarPorIdFn, mapearFn, nomeRecurso = "Item") {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    if (!id) {
      setItem(null)
      setErro("ID inválido")
      setLoading(false)
      return
    }

    let ativo = true

    async function carregarItem() {
      try {
        setLoading(true)
        setErro(null)

        const dadosItem = await buscarPorIdFn(id)
        const itemMapeado = mapearFn(dadosItem)

        if (ativo) setItem(itemMapeado)
      } catch (err) {
        console.error(`Erro ao carregar ${nomeRecurso}:`, err)
        if (ativo) setErro(`Não foi possível carregar ${nomeRecurso}`)
      } finally {
        if (ativo) setLoading(false)
      }
    }

    carregarItem()

    return () => {
      ativo = false
    }
  }, [id, buscarPorIdFn, mapearFn, nomeRecurso])

  return { item, loading, erro }
}
