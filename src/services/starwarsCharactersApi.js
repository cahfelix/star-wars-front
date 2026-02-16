// Nova API com imagens incluídas
const BASE_URL = "https://akabab.github.io/starwars-api/api"

async function fetchApi(endpoint, errorMessage) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(errorMessage, error)
    throw new Error(errorMessage)
  }
}

export function buscarTodosPersonagens() {
  return fetchApi("/all.json", "Erro ao buscar personagens")
}

export function buscarPersonagemPorId(id) {
  return fetchApi(`/id/${id}.json`, "Erro ao buscar personagem")
}

