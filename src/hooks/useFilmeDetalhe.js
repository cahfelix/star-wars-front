import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarFilmePorId } from "../services/swapiApi"
import { mapearFilme } from "../mappers/filmesMapper"

export function useFilmeDetalhe(id) {
  return useDetalheGenerico(
    id,
    buscarFilmePorId,
    mapearFilme,
    "Filme"
  )
}
