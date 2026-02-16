import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarPersonagemPorId } from "../services/starwarsCharactersApi"
import { mapearPessoa } from "../mappers/pessoaMapperNew"

export function usePessoaDetalhe(id) {
  return useDetalheGenerico(
    id,
    buscarPersonagemPorId,
    mapearPessoa,
    "Pessoa"
  )
}
