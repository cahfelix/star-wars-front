import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PessoasPage from './pages/PessoasPage'
import PessoasDetalhePage from "./pages/PessoasDetalhePage"
import NavesPage from './pages/NavesPage'
import NavesDetalhe from './pages/NavesDetalhe'
import EspeciesPage from "./pages/EspeciesPage"
import Footer from "./components/Footer"
import Breadcrumbs from "./components/Breadcrumbs"

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
                src="/star-wars-logo.png"
                alt="Star Wars Logo"
                className="logo"
              />
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav className="header-nav">
            <Link to="/">Pessoas</Link>
            <Link to="/naves">Naves</Link>
            <Link to="/especies">Espécies</Link>
          </nav>
        </header>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<PessoasPage />} />
          <Route path="/pessoas/:id" element={<PessoasDetalhePage />} />
          <Route path="/naves" element={<NavesPage />} />
          <Route path="/naves/:id" element={<NavesDetalhe />} />
          <Route path="/especies" element={<EspeciesPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App