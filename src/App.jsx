import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import PessoasPage from './pages/PessoasPage'
import PessoasDetalhePage from "./pages/PessoasDetalhePage"
import NavesPage from './pages/NavesPage'
import NavesDetalhe from './pages/NavesDetalhe'
import EspeciesPage from "./pages/EspeciesPage"
import EspeciesDetalhe from "./pages/EspeciesDetalhe"
import FilmesPage from "./pages/FilmesPage"
import FilmesDetalhe from "./pages/FilmesDetalhe"
import Footer from "./components/Footer"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Header */}
        <header>
          {/* Logo centralizado */}
          <div className="header-logo">
            <Link to="/">
              <img
                src="/images/star-wars-logo.png"
                alt="Star Wars Logo"
                className="logo"
              />
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav className="header-nav">
            <NavLink to="/filmes">Filmes</NavLink>
            <NavLink to="/pessoas" end>Pessoas</NavLink>
            <NavLink to="/naves">Naves</NavLink>
            <NavLink to="/especies">Espécies</NavLink>
            
          </nav>
        </header>

        {/* Rotas */}
        <Routes>
          <Route path="/filmes" element={<FilmesPage />} />
          <Route path="/filmes/:id" element={<FilmesDetalhe />} />
          <Route path="/pessoas" element={<PessoasPage />} />
          <Route path="/pessoas/:id" element={<PessoasDetalhePage />} />
          <Route path="/naves" element={<NavesPage />} />
          <Route path="/naves/:id" element={<NavesDetalhe />} />
          <Route path="/especies" element={<EspeciesPage />} />
          <Route path="/especies/:id" element={<EspeciesDetalhe />} />
          
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App