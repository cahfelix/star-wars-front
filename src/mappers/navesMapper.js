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
import { getStarshipImage } from "../helpers/images"

// Função para mapear UMA nave
export function mapearNave(naveApi) {
  return {
    id: extrairIdDaUrl(naveApi.url),
    nome: naveApi.name,
    imagem: getStarshipImage(extrairIdDaUrl(naveApi.url)),
    modelo: naveApi.model,
    classe: naveApi.starship_class
  }
}

// Função para mapear VÁRIAS naves
export function mapearNaves(navesApi) {
  return navesApi.map(mapearNave)
}

export function mapearNaveDetalhe(naveApi) {
  return {
    ...mapearNave(naveApi),
    passageiros: naveApi.passengers,
    velocidade: naveApi.max_atmosphering_speed,
    autonomia: naveApi.MGLT,
    comprimento: naveApi.length,
    capacidadeCarga: naveApi.cargo_capacity,
    consumiveis: naveApi.consumables,
    pilotos: naveApi.pilots?.map(url => extrairIdDaUrl(url)) || [],
    filmes: naveApi.films?.map(url => extrairIdDaUrl(url)) || []
  }
}
