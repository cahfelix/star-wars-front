import { useNaves } from "../hooks/useNaves"
import NavesList from "../components/NavesList"
import PageLayout from "../components/PageLayout"
import PageState from "../components/PageState"

export default function NavesPage() {
  const { naves, loading, erro } = useNaves()

  return (
    <PageLayout title="Naves">
      <PageState
        loading={loading}
        erro={erro}
        empty={naves.length === 0}
      >
      <NavesList naves={naves} />
      </PageState>
    </PageLayout>
  )
}