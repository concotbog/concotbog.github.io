import { GalleryCarousel } from '../components/Gallery/GalleryCarousel'
import { Container } from '../components/ui/Container/Container'
import { PageHeader } from '../components/ui/PageHeader/PageHeader'
import { galleries } from '../data/galleries'
import styles from './GalleryPage.module.css'

export function GalleryPage() {
  return (
    <Container className={styles.page}>
      <PageHeader
        title="Gallery"
        subtitle="A few snapshots from competition weekends and team life."
      />
      <div className={styles.gridContainer}>
        {galleries.map((g) => (
          <GalleryCarousel key={g.id} gallery={g} />
        ))}
      </div>
    </Container>
  );
}

