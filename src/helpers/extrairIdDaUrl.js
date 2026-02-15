/**
 * Extrai o ID de uma URL da SWAPI
 * 
 * @param {string} url - URL da API (ex: "https://swapi.dev/api/people/1/")
 * @returns {string|null} - ID extraído (ex: "1") ou null se URL inválida
 * 
 * Exemplo:
 * extrairIdDaUrl("https://swapi.dev/api/people/1/") // "1"
 * extrairIdDaUrl("https://swapi.dev/api/starships/10/") // "10"
 */
export function extrairIdDaUrl(url) {
  if (!url) return null
  
  const partes = url.split('/')
  const id = partes.slice(-2, -1)[0]
  
  return id || null
}

