import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarNavePorId } from "../services/swapiApi"
import { mapearNaveDetalhe } from "../mappers/navesMapper"

export function useNaveDetalhe(id) {
  return useDetalheGenerico(
    id,
    buscarNavePorId,
    mapearNaveDetalhe,
    "Nave"
  )
}
