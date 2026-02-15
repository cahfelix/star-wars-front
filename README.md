# 🌌 Star Wars - Enciclopédia Interativa

Aplicação web desenvolvida em React que consome a API SWAPI (Star Wars API) para exibir informações sobre o universo Star Wars de forma interativa e elegante.

## 📋 Sobre o Projeto

Este projeto é uma enciclopédia interativa do universo Star Wars que permite aos usuários explorar informações detalhadas sobre:

- **👥 Pessoas**: Personagens icônicos do universo Star Wars com informações detalhadas
- **🚀 Naves**: Naves espaciais e veículos com especificações técnicas
- **🧬 Espécies**: Diferentes espécies presentes na saga

## 🚀 Tecnologias Utilizadas

- **React** 19.2.0 - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** 7.13.0 - Navegação entre páginas
- **Vite** 7.3.1 - Build tool moderna e dev server ultra-rápido
- **ESLint** - Linting e qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── EspeciesList.jsx
│   ├── NavesList.jsx
│   └── PessoasList.jsx
├── pages/              # Páginas da aplicação
│   ├── EspeciesPage.jsx
│   ├── NavesPage.jsx
│   ├── NavesDetalhe.jsx
│   ├── PessoasPage.jsx
│   └── PessoasDetalhePage.jsx
├── services/           # Serviços de API
│   └── swapiApi.js
├── helpers/            # Funções auxiliares
├── hooks/              # Custom hooks para lógica reutilizável
│   ├── useEspecies.js
│   ├── useNaveDetalhe.js
│   ├── usePessoaDetalhe.js
│   ├── useListagemGenerica.js
│   └── useDetalheGenerico.js
├── mappers/            # Mapeadores de dados da API
│   ├── especiesMapper.js
│   └── navesMapper.js
├── App.jsx             # Componente principal com rotas
└── main.jsx            # Entry point da aplicação
```

## 🏗️ Arquitetura

O projeto segue princípios de **Clean Architecture** e **Single Responsibility Principle**:

- **Custom Hooks**: Encapsulam lógica de negócio e chamadas à API
- **Hooks Genéricos**: `useListagemGenerica` e `useDetalheGenerico` para reutilização de lógica
- **Service Layer**: Camada de serviço (`swapiApi.js`) para comunicação com a API
- **Mappers**: Transformam dados da API para o formato usado na aplicação
- **Componentes**: Focados apenas em apresentação e UI

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar

1. Clone o repositório:
```bash
git clone https://github.com/cahfelix/star-wars-front.git
cd star-wars
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Gera a build otimizada para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar qualidade do código

## 🌐 API

O projeto consome a [SWAPI - The Star Wars API](https://swapi.dev/) para obter todos os dados do universo Star Wars.

## 🎨 Design

Interface minimalista com tema escuro inspirado no universo Star Wars:
- Fundo preto com texto branco
- Logo oficial do Star Wars
- Navegação intuitiva e responsiva
- Cards elegantes para exibição de informações

## 👩‍💻 Desenvolvido por

**Cah Felix** ([@cahfelix](https://github.com/cahfelix))

---

⭐ May the Force be with you!
