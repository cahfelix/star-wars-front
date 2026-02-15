import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarEspeciePorId } from "../services/swapiApi"
import { mapearEspecie } from "../mappers/especiesMapper"

export function useEspecieDetalhe(id) {
  return useDetalheGenerico(
    id,
    buscarEspeciePorId,
    mapearEspecie,
    "Especie"
  )
}
