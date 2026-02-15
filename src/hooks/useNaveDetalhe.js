import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarNavePorId } from "../services/swapiApi"
import { mapearNaveDetalhe } from "../mappers/navesMapper"

export function useNaveDetalhe(id) {
  const { item: nave, loading, erro } = useDetalheGenerico(
    id,
    buscarNavePorId,
    mapearNaveDetalhe,
    "Nave"
  )

  return { nave, loading, erro }
}
