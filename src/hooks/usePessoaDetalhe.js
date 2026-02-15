import { useDetalheGenerico } from "./base/useDetalheGenerico"
import { buscarPessoaPorId } from "../services/swapiApi"
import { mapearPessoa } from "../mappers/pessoaMapper"

export function usePessoaDetalhe(id) {
  return useDetalheGenerico(
    id,
    buscarPessoaPorId,
    mapearPessoa,
    "Pessoa"
  )
}
