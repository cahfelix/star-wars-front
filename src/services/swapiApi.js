/**
 * SWAPI Service - Star Wars API
 *
 * Responsabilidades:
 * - Comunicação com a API externa
 * - Tratamento de erros HTTP
 * - Retorno de dados brutos (sem transformação)
 *
 * Princípio: Single Responsibility
 */

const BASE_URL = "https://swapi.dev/api"

/**
 * Função genérica para fazer requisições à API
 * @param {string} endpoint - Endpoint da API (ex: '/people/', '/starships/1')
 * @param {string} errorMessage - Mensagem de erro personalizada
 * @returns {Promise<Object>} - Dados da API
 */
async function fetchApi(endpoint, errorMessage = "Erro ao buscar dados") {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(errorMessage)
  }

  return await response.json()
}

// ============================================
// PESSOAS (People)
// ============================================

export function buscarPessoas(page = 1) {
  return fetchApi(`/people/?page=${page}`, "Erro ao buscar pessoas")
}

export function buscarPessoaPorId(id) {
  return fetchApi(`/people/${id}`, "Erro ao buscar pessoa")
}

export function buscarPessoaPorNome(nome) {
  return fetchApi(
    `/people/?search=${encodeURIComponent(nome)}`,
    "Erro ao buscar pessoa"
  )
}

// ============================================
// NAVES (Starships)
// ============================================

export function buscarNaves() {
  return fetchApi('/starships/', "Erro ao buscar naves")
}

export function buscarNavePorId(id) {
  return fetchApi(`/starships/${id}`, "Erro ao buscar nave")
}

// ============================================
// ESPÉCIES (Species)
// ============================================

export function buscarEspecies() {
  return fetchApi('/species/', "Erro ao buscar espécies")
}

export function buscarEspeciePorId(id) {
  return fetchApi(`/species/${id}`, "Erro ao buscar espécie")
}

// ============================================
// FILMES (Films)
// ============================================

export function buscarFilmes() {
  return fetchApi('/films/', "Erro ao buscar filmes")
}

// ============================================
// PLANETAS (Planets)
// ============================================

export function buscarPlanetas() {
  return fetchApi('/planets/', "Erro ao buscar planetas")
}

// ============================================
// VEÍCULOS (Vehicles)
// ============================================

export function buscarVeiculos() {
  return fetchApi('/vehicles/', "Erro ao buscar veículos")
}
