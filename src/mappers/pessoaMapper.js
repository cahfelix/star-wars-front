/**
 * Mappers - Transformadores de Dados
 * 
 * Responsabilidades:
 * - Transformar dados da API para o formato da aplicação
 * - Isolar a estrutura da API do resto do código
 * - Facilitar mudanças na API sem quebrar a aplicação
 * 
 * Princípio: Adapter Pattern
 */
import { extrairIdDaUrl } from "../helpers/extrairIdDaUrl"

// Função para mapear UMA pessoa
export function mapearPessoa(pessoaApi) {
  return {
    id: extrairIdDaUrl(pessoaApi.url),
    nome: pessoaApi?.name ?? "Desconhecido",
    sexo: pessoaApi.gender,
    anoNascimento: pessoaApi.birth_year,
    altura: pessoaApi.height,
    peso: pessoaApi.mass,
    corCabelo: pessoaApi.hair_color,
    corPele: pessoaApi.skin_color,
    corOlhos: pessoaApi.eye_color
  }
}

// Função para mapear uma lista de pessoas
export function mapearPessoas(pessoasApi) {
  return pessoasApi.map(mapearPessoa)
}