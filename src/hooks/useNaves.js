/**
 * Hook para buscar naves
 * 
 * Responsabilidades:
 * - Carregar naves ao montar o componente
 * - Gerenciar estados (loading, erro)
 * - Buscar dados na API
 * - Atualizar estado de dados
 * - Tratar erros
 * - Finalmente, atualizar estado de carregamento
 * 
 */
import { useListagemGenerica } from "./base/useListagemGenerica"
import { buscarNaves } from "../services/swapiApi"
import { mapearNaves } from "../mappers/navesMapper"

export function useNaves() {
  const { dados: naves, loading, erro } = useListagemGenerica(
    buscarNaves,
    mapearNaves,
    "naves"
  )

  return { naves, loading, erro }
}
