import { TeamMemberBadge } from '../components/Badge/TeamMemberBadge'
import { Container } from '../components/ui/Container/Container'
import { PageHeader } from '../components/ui/PageHeader/PageHeader'
import { execTeamMembers } from '../data/execTeam'
import styles from './ExecutiveTeamPage.module.css'

export function ExecutiveTeamPage() {
  return (
    <Container className={styles.page}>
      <PageHeader
        title="Executive Team"
        subtitle="Meet the students leading the Concordia Concrete Toboggan Team."
      />
      <div className={styles.grid}>
        {execTeamMembers.map((m) => (
          <TeamMemberBadge key={m.id} member={m} />
        ))}
      </div>
    </Container>
  )
}

