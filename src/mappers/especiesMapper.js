import { extrairIdDaUrl } from "../helpers/extrairIdDaUrl"
import { getSpeciesImage } from "../helpers/images"

export function mapearEspecie(especieApi) {
  const id = extrairIdDaUrl(especieApi.url)

  return {
    id: id,
    nome: especieApi.name,
    imagem: getSpeciesImage(id),
    classificacao: especieApi.classification,
    designacao: especieApi.designation,
    linguagem: especieApi.language,
    mediaAltura: especieApi.average_height,
    mediaVida: especieApi.average_lifespan,
    planetaOrigemId: especieApi.homeworld ? extrairIdDaUrl(especieApi.homeworld) : null
  }
}

export function mapearEspecies(especiesApi) {
  return especiesApi.map(mapearEspecie)
} 