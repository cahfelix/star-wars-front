/**
 * Mapper para a nova API de personagens (com imagens incluídas)
 *
 * Responsabilidades:
 * - Transformar dados da nova API para o formato da aplicação
 * - Usar imagens da API diretamente (não precisa mapear localmente!)
 * - Manter compatibilidade com o formato existente
 */
import { formatarAno } from "../helpers/formatarAno"

// Função para mapear UMA pessoa da nova API
export function mapearPessoa(pessoaApi) {
  return {
    id: pessoaApi.id,
    nome: pessoaApi.name ?? "Desconhecido",
    imagem: pessoaApi.image || "/images/personagens/placeholder.png",
    sexo: pessoaApi.gender,
    anoNascimento: formatarAno(pessoaApi.born),
    altura: pessoaApi.height ? Math.round(pessoaApi.height * 100) : "Desconhecido", // Converte metros para cm
    peso: pessoaApi.mass || "Desconhecido",
    corCabelo: pessoaApi.hairColor || "Desconhecido",
    corPele: pessoaApi.skinColor || "Desconhecido",
    corOlhos: pessoaApi.eyeColor || "Desconhecido",
    planetaNatalId: pessoaApi.homeworld || null, // Agora é string, não ID
    especieIds: pessoaApi.species ? [pessoaApi.species] : [], // Agora é string, não array de URLs

    // Novos campos da nova API
    localNascimento: pessoaApi.bornLocation || null,
    anoMorte: formatarAno(pessoaApi.died),
    localMorte: pessoaApi.diedLocation || null,
    mestres: pessoaApi.masters || [],
    aprendizes: pessoaApi.apprentices || []
  }
}

// Função para mapear uma lista de pessoas
export function mapearPessoas(pessoasApi) {
  return pessoasApi.map(mapearPessoa)
}

