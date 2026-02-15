import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()

  // Mapear nomes amigáveis para as rotas
  const routeNames = {
    '': 'Pessoas',
    'pessoas': 'Pessoas',
    'naves': 'Naves',
    'especies': 'Espécies'
  }

  // Dividir o pathname em segmentos
  const pathSegments = location.pathname.split('/').filter(segment => segment)

  // Se estiver na home ou apenas em uma listagem (sem detalhes), não mostrar breadcrumbs
  if (pathSegments.length === 0 || pathSegments.length === 1) {
    return null
  }

  // Construir os breadcrumbs
  const breadcrumbs = [
    { name: 'Pessoas', path: '/' }
  ]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Se for um ID (número), mostrar como "Detalhes"
    if (!isNaN(segment)) {
      breadcrumbs.push({
        name: 'Detalhes',
        path: currentPath,
        isLast: index === pathSegments.length - 1
      })
    } else {
      breadcrumbs.push({
        name: routeNames[segment] || segment,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      })
    }
  })

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="breadcrumbs-item">
            {crumb.isLast ? (
              <span className="breadcrumbs-current">{crumb.name}</span>
            ) : (
              <>
                <Link to={crumb.path} className="breadcrumbs-link">
                  {crumb.name}
                </Link>
                <span className="breadcrumbs-separator">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

