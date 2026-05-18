import { Container } from '../ui/Container/Container'
import { OrgLogoStrip } from './OrgLogoStrip'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.blockTitle}>Contact</div>
          <div className={styles.text}>
            <a className={styles.link} href="mailto:toboggan.csce@ecaconcordia.ca">
              toboggan.csce@ecaconcordia.ca
            </a>
          </div>
          <div className={styles.text}>
            Address: B-203, 2160 Bishop st. H3G2E9, Montreal, QC
          </div>
          <div className={styles.meta}>
            © {new Date().getFullYear()} Concordia University Concrete Toboggan Team
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.blockTitle}>Organizations</div>
          <OrgLogoStrip />
        </div>
      </Container>
    </footer>
  )
}

