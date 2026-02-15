/**
 * Componente de Paginação
 * 
 * Exibe controles de navegação entre páginas
 * - Botões Anterior/Próximo
 * - Números de página
 * - Informações sobre página atual e total
 */

export default function Paginacao({
  paginaAtual,
  totalPaginas,
  proximaPagina,
  paginaAnterior,
  irParaPagina,
  temProxima,
  temAnterior
}) {
  if (totalPaginas <= 1) return null

  // Gerar array de números de página para exibir
  const gerarNumerosPaginas = () => {
    const paginas = []
    const maxBotoes = 5 // Máximo de botões de número a exibir

    let inicio = Math.max(1, paginaAtual - Math.floor(maxBotoes / 2))
    let fim = Math.min(totalPaginas, inicio + maxBotoes - 1)

    // Ajustar início se estiver no final
    if (fim - inicio < maxBotoes - 1) {
      inicio = Math.max(1, fim - maxBotoes + 1)
    }

    // Adicionar primeira página e reticências
    if (inicio > 1) {
      paginas.push(1)
      if (inicio > 2) {
        paginas.push('...')
      }
    }

    // Adicionar páginas do meio
    for (let i = inicio; i <= fim; i++) {
      paginas.push(i)
    }

    // Adicionar reticências e última página
    if (fim < totalPaginas) {
      if (fim < totalPaginas - 1) {
        paginas.push('...')
      }
      paginas.push(totalPaginas)
    }

    return paginas
  }

  const numerosPaginas = gerarNumerosPaginas()

  return (
    <div className="paginacao">
      <button
        onClick={paginaAnterior}
        disabled={!temAnterior}
        className="paginacao-btn"
        aria-label="Página anterior"
      >
        ← Anterior
      </button>

      <div className="paginacao-numeros">
        {numerosPaginas.map((numero, index) => {
          if (numero === '...') {
            return (
              <span key={`ellipsis-${index}`} className="paginacao-ellipsis">
                ...
              </span>
            )
          }

          return (
            <button
              key={numero}
              onClick={() => irParaPagina(numero)}
              className={`paginacao-numero ${
                numero === paginaAtual ? 'ativo' : ''
              }`}
              aria-label={`Ir para página ${numero}`}
              aria-current={numero === paginaAtual ? 'page' : undefined}
            >
              {numero}
            </button>
          )
        })}
      </div>

      <button
        onClick={proximaPagina}
        disabled={!temProxima}
        className="paginacao-btn"
        aria-label="Próxima página"
      >
        Próximo →
      </button>

      <div className="paginacao-info">
        Página {paginaAtual} de {totalPaginas}
      </div>
    </div>
  )
}

