import styles from './SectionHeader.module.css'

export function SectionHeader({
  title,
  eyebrow,
}: {
  title: string
  eyebrow?: string
}) {
  return (
    <div className={styles.header}>
      {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

