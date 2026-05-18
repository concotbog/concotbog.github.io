import { Container } from '../components/ui/Container/Container'
import { Hero } from '../components/ui/Hero/Hero'
import { SectionHeader } from '../components/ui/SectionHeader/SectionHeader'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div>
      <Hero
        title="Concordia Concrete Toboggan Team"
        subtitle="Designing, building, and racing at the Great Northern Concrete Toboggan Race (GNCTR)."
        backgroundImageSrc="/pictures/about-us/Aboutus.png"
      />
      <Container className={styles.content}>
        <SectionHeader title="About Us" />
        <div className={styles.prose}>
          <p>
            We are the Concordia Concrete Toboggan Team (CCTT)! We represent Concordia
            at the Great Northern Concrete Toboggan Race (GNCTR), which is the largest and
            longest running Undergraduate Engineering Competition in Canada. Our team this
            year consists of 30+ students from Civil, Building, Mechanical, Software,
            Electrical, and Aerospace Engineering in various stages of their Undergraduate
            degrees. The Competition involves designing and manufacturing a toboggan that
            safely carries 5 people, weighs less than 350 lbs, and includes concrete skis,
            a structural frame, and braking & steering systems. Only the running surface
            which is in contact with the snow, is concrete - not the entire toboggan.
          </p>
          <p>
            At our university, CCTT provides students with the chance to get involved with
            the faculty’s community. We provide students with valuable experience for career
            and professional development along with an enriching extra-curricular atmosphere
            which fosters school spirit and cooperative skills. This means putting theoretical
            material learned from the classroom into real practice and learning applicable
            engineering skills such as CAD and team management. Additionally, our team acts as
            a social group for students to meet and make new friends.
          </p>
          <p>
            At Concordia, CCTT gives students hands-on experience and an
            enriching extra-curricular environment that fosters school spirit,
            collaboration, and practical engineering skills.
          </p>
        </div>
      </Container>
    </div>
  )
}

