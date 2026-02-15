import { useEspecies } from "../hooks/useEspecies"
import EspeciesList from "../components/EspeciesList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"

export default function EspeciesPage() {
  const { especies, loading, erro } = useEspecies()

  return (
    <PageLayout title="Especies">
      <PageState
        loading={loading}
        erro={erro}
        empty={especies.length === 0}
      >
      <EspeciesList especies={especies} />
      </PageState>
    </PageLayout>
  )
}