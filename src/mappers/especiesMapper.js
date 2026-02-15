import { extrairIdDaUrl } from "../helpers/extrairIdDaUrl"

export function mapearEspecie(especieApi) {
  return {
    id: extrairIdDaUrl(especieApi.url),
    nome: especieApi.name,
    classificacao: especieApi.classification,
    designacao: especieApi.designation,
    linguagem: especieApi.language,
    mediaAltura: especieApi.average_height,
    mediaVida: especieApi.average_lifespan,
    homeworld: especieApi.homeworld
  }
}

export function mapearEspecies(especiesApi) {
  return especiesApi.map(mapearEspecie)
} 