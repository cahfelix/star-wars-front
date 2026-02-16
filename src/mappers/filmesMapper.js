import { extrairIdDaUrl } from "../helpers/extrairIdDaUrl"
import { getFilmImage } from "../helpers/images"

export function mapearFilme(filmeApi) {
  const id = extrairIdDaUrl(filmeApi.url)

  return {
    id: id,
    imagem: getFilmImage(id),
    titulo: filmeApi.title,
    ano: filmeApi.release_date,
    diretor: filmeApi.director
  }
}

export function mapearFilmes(filmesApi) {
  return filmesApi.map(mapearFilme)
} 