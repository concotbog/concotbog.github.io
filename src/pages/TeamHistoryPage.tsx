import Timeline from '../components/Timeline/Timeline'
import { Container } from '../components/ui/Container/Container'
import { PageHeader } from '../components/ui/PageHeader/PageHeader'
import styles from './TeamHistoryPage.module.css'

export function TeamHistoryPage() {
  return (
    <Container className={styles.page}>
      <PageHeader
        title="Team History"
        subtitle="Scroll through the years and explore team photos and awards."
      />
      <Timeline/>
    </Container>
  )
}

