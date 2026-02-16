import { useEffect, useState } from "react"
import { buscarTodosPersonagens } from "../services/starwarsCharactersApi"
import { mapearPessoas } from "../mappers/pessoaMapperNew"

/**
 * Função auxiliar para embaralhar array (algoritmo Fisher-Yates)
 * @param {Array} array - Array a ser embaralhado
 * @returns {Array} - Novo array embaralhado
 */
function embaralhar(array) {
  const novo = [...array]
  for (let i = novo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[novo[i], novo[j]] = [novo[j], novo[i]]
  }
  return novo
}

/**
 * Hook para buscar personagens relacionados (exceto o atual)
 * @param {string} id - ID do personagem atual
 * @param {number} quantidade - Quantidade de personagens a retornar (padrão: 3)
 * @returns {Object} - { personagens, loading, erro }
 */
export function usePersonagensRelacionados(id, quantidade = 3) {
  const [personagens, setPersonagens] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let ativo = true

    async function carregarPersonagens() {
      try {
        setLoading(true)
        setErro(null)

        const resposta = await buscarTodosPersonagens()
        const personagensMapeados = mapearPessoas(resposta)

        // Filtra o personagem atual (comparar como número)
        const outrosPersonagens = personagensMapeados.filter(p => p.id !== parseInt(id))

        // Embaralha e pega a quantidade desejada
        const personagensAleatorios = embaralhar(outrosPersonagens).slice(0, quantidade)

        if (ativo) setPersonagens(personagensAleatorios)
      } catch (err) {
        console.error("Erro ao carregar personagens relacionados:", err)
        if (ativo) setErro("Não foi possível carregar personagens relacionados")
      } finally {
        if (ativo) setLoading(false)
      }
    }

    carregarPersonagens()

    return () => {
      ativo = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return { personagens, loading, erro }
}
