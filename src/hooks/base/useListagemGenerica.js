/**
 * Hook genérico para buscar listagens na API
 * 
 * Responsabilidades:
 * - Carregar dados ao montar o componente
 * - Gerenciar estados (loading, erro)
 * - Buscar dados na API
 * - Atualizar estado de dados
 * - Tratar erros
 * - Finalmente, atualizar estado de carregamento
 * 
 * @param {*} buscarFn - Função para buscar dados na API
 * @param {*} mapearFn - Função para mapear dados da API para o formato da aplicação
 * @param {string} nomeRecurso - Nome do recurso para exibir em mensagens de erro
 * @returns {Object} - Objeto com dados, loading e erro
 * 
 * Exemplo de uso:
 * 
 * const { dados, loading, erro } = useListagemGenerica(
 *   buscarPessoas,
 *   mapearPessoas,
 *   "pessoas"
 * )
 */
import { useEffect, useState } from "react"

export function useListagemGenerica(buscarFn, mapearFn, nomeRecurso = "dados") {
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let ativo = true

    async function carregar() {
      try {
        setLoading(true)
        setErro(null)

        const resposta = await buscarFn()
        const dadosBrutos = resposta.results ?? resposta
        const dadosMapeados = mapearFn(dadosBrutos)

        if (ativo) setDados(dadosMapeados)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { dados, loading, erro }
}
