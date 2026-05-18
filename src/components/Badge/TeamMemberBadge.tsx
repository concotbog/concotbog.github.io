import type { ExecTeamMember } from '../../data/execTeam'
import styles from './TeamMemberBadge.module.css'

export function TeamMemberBadge({ member }: Readonly<{ member: ExecTeamMember }>) {
  return (
    <article className={styles.card}>
      <div className={styles.avatarWrap}>
        <img className={styles.avatar} src={member.imageSrc} alt={member.name} />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{member.name}</div>
        <div className={styles.position}>{member.position}</div>
      </div>
    </article>
  )
}

