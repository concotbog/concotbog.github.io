import type { Sponsor } from '../../data/sponsors'
import styles from './SponsorCard.module.css'

export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const card = (
    <article className={styles.card}>
      <div className={styles.logoWrap}>
        <img
          className={styles.logo}
          src={sponsor.logoSrc}
          alt={sponsor.name}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{sponsor.name}</div>
        <div className={styles.message}>{sponsor.thankYou}</div>
      </div>
    </article>
  );

  return sponsor.websiteUrl ? (
    <a className={styles.link} href={sponsor.websiteUrl} target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : (
    card
  )
}

