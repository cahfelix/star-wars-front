/**
 * Helper para formatação de anos no universo Star Wars
 * 
 * Sistema de datação:
 * - BBY (Before Battle of Yavin) = Antes da Batalha de Yavin
 * - ABY (After Battle of Yavin) = Depois da Batalha de Yavin
 * 
 * A Batalha de Yavin (destruição da primeira Estrela da Morte) 
 * é o marco zero da cronologia Star Wars
 */

/**
 * Formata ano de nascimento/morte no formato Star Wars
 * 
 * @param {number|null|undefined} ano - Ano a ser formatado
 * @returns {string|null} - Ano formatado (ex: "19 BBY", "34 ABY") ou null
 * 
 * Exemplos:
 * formatarAno(-19)  → "19 BBY"  (Luke Skywalker nasceu 19 anos antes da Batalha de Yavin)
 * formatarAno(34)   → "34 ABY"  (Luke morreu 34 anos depois da Batalha de Yavin)
 * formatarAno(0)    → "0 BBY/ABY" (Ano da Batalha de Yavin)
 * formatarAno(null) → null
 */
export function formatarAno(ano) {
  if (ano === null || ano === undefined) return null
  if (ano < 0) return `${Math.abs(ano)} BBY`
  if (ano > 0) return `${ano} ABY`
  return "0 BBY/ABY" // Ano da Batalha de Yavin
}

