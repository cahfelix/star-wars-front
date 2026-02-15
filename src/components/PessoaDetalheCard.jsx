export default function PessoaDetalheCard({ pessoa }) {
  if (!pessoa) return null

  return (
    <div className="detail-card">
      <h2>{pessoa.nome}</h2>

      <p><strong>Sexo:</strong> {pessoa.sexo}</p>
      <p><strong>Ano de Nascimento:</strong> {pessoa.anoNascimento}</p>
      <p><strong>Altura:</strong> {pessoa.altura}</p>
      <p><strong>Peso:</strong> {pessoa.peso}</p>
      <p><strong>Cor do Cabelo:</strong> {pessoa.corCabelo}</p>
      <p><strong>Cor da Pele:</strong> {pessoa.corPele}</p>
      <p><strong>Cor dos Olhos:</strong> {pessoa.corOlhos}</p>
    </div>
  )
}