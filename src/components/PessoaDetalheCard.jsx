import { obterNomePlaneta, obterNomeEspecie } from "../helpers/nomes"

export default function PessoaDetalheCard({ pessoa }) {
  if (!pessoa) return null

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{pessoa.nome}</h2>
      </div>

      <div className="detail-content">
        <div className="detail-image-container">
          <img
            src={pessoa.imagem}
            alt={pessoa.nome}
            className="detail-image"
            onError={(e) => e.target.src = "/images/personagens/placeholder.png"}
          />
        </div>

        <div className="detail-info">
          <div className="info-group">
            <h3>Informações Pessoais</h3>
            <p><strong>Sexo:</strong> {pessoa.sexo}</p>
            <p><strong>Ano de Nascimento:</strong> {pessoa.anoNascimento}</p>
          </div>

          <div className="info-group">
            <h3>Características Físicas</h3>
            <p><strong>Altura:</strong> {pessoa.altura} cm</p>
            <p><strong>Peso:</strong> {pessoa.peso} kg</p>
            <p><strong>Cor do Cabelo:</strong> {pessoa.corCabelo}</p>
            <p><strong>Cor da Pele:</strong> {pessoa.corPele}</p>
            <p><strong>Cor dos Olhos:</strong> {pessoa.corOlhos}</p>
          </div>

          <div className="info-group">
            <h3>Origem</h3>
            <p><strong>Planeta Natal:</strong> {pessoa.planetaNatalId ? obterNomePlaneta(pessoa.planetaNatalId) : "Desconhecido"}</p>
            <p><strong>Espécie:</strong> {pessoa.especieIds?.length > 0 ? obterNomeEspecie(pessoa.especieIds[0]) : "Humano"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}