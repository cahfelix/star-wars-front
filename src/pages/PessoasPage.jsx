import { usePessoas } from "../hooks/usePessoas"
import PessoasList from "../components/PessoasList"

export default function PessoasPage() {
  const { pessoas, loading, erro } = usePessoas()

  if (loading) return <p className="loading">Carregando pessoas...</p>

  if (erro) {
    return (
      <div>
        <p>{erro}</p>
      </div>
    )
  }

  if (pessoas.length === 0) return <p className="empty">Nenhuma pessoa encontrada.</p>


  return (
    <PessoasList pessoas={pessoas} />
  )
}
