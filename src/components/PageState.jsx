export default function PageState({ loading, erro, empty, children }) {
  if (erro) return <p className="error">{erro}</p>
  if (loading) return <p className="loading">Carregando...</p>
  if (empty) return <p className="empty">Nenhum dado encontrado.</p>

  return children
}