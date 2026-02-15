/**
 * Hook para buscar pessoas
 * 
 * Responsabilidades:
 * - Carregar pessoas ao montar o componente
 * - Gerenciar estados (loading, erro)
 * - Buscar dados na API
 * - Atualizar estado de dados
 * - Tratar erros
 * - Finalmente, atualizar estado de carregamento
 * 
 */
import { useListagemGenerica } from "./base/useListagemGenerica"
import { buscarPessoas } from "../services/swapiApi"
import { mapearPessoas } from "../mappers/pessoaMapper"

export function usePessoas() {
  const { dados: pessoas, loading, erro } =
    useListagemGenerica(buscarPessoas, mapearPessoas, "pessoas")

  return { pessoas, loading, erro }
}
