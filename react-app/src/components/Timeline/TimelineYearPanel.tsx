import type { TeamHistoryYear } from '../../data/teamHistory'
import { PrizeList } from './PrizeList'
import styles from './Timeline.module.css'

export function TimelineYearPanel({ year }: { year: TeamHistoryYear }) {
  return (
    <section className={styles.panel} aria-label={`Details for ${year.year}`}>
      <div className={styles.panelHeader}>
        <div className={styles.panelTitle}>
          {year.year} <span className={styles.panelLocation}>— {year.location}</span>
        </div>
        <div className={styles.panelSummary}>{year.summary}</div>
      </div>

      <div className={styles.panelBody}>
        <div className={styles.photoWrap}>
          <img className={styles.photo} src={year.teamPhotoSrc} alt={`Team photo ${year.year}`} />
        </div>
        <div>
          <div className={styles.blockTitle}>Prizes</div>
          <PrizeList prizes={year.prizes} />
        </div>
      </div>
    </section>
  )
}

