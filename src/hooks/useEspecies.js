/**
 * Hook para buscar espécies
 * 
 * Responsabilidades:
 * - Carregar espécies ao montar o componente
 * - Gerenciar estados (loading, erro)
 * - Buscar dados na API
 * - Atualizar estado de dados
 * - Tratar erros
 * - Finalmente, atualizar estado de carregamento
 * 
 */
import { useListagemGenerica } from "./base/useListagemGenerica"
import { buscarEspecies } from "../services/swapiApi"
import { mapearEspecies } from "../mappers/especiesMapper"

export function useEspecies() {
  const { dados: especies, loading, erro } = useListagemGenerica(
    buscarEspecies,
    mapearEspecies,
    "espécies"
  )

  return { especies, loading, erro }
}
