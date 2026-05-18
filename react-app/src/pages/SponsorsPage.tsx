import { useState } from "react";
import { SponsorCard } from "../components/Card/SponsorCard";
import { Container } from "../components/ui/Container/Container";
import { PageHeader } from "../components/ui/PageHeader/PageHeader";
import { sponsors } from "../data/sponsors";
import styles from "./SponsorsPage.module.css";

export function SponsorsPage() {
  const [pdfLang, setPdfLang] = useState<"en" | "fr">("en");
  const sponsorshipEmail = "sponsorship.toboggan@csce.ecaconcordia.ca"
  return (
    <Container className={styles.page}>
      <PageHeader
        title="Sponsors"
        subtitle="Thank you to the organizations that support our team."
      />
      <div className={styles.grid}>
        {sponsors.map((s) => (
          <SponsorCard key={s.id} sponsor={s} />
        ))}
      </div>

      <div className={styles.becomeSponsor}>
        <h3>Interested in partnering with us?</h3>
        <p>
          We are always looking for new partners to support our mission. Take a
          look at our sponsorship packages below to see how we can collaborate,
          and feel free to reach out to us at{" "}
          <a href={`mailto:${sponsorshipEmail}`}>{sponsorshipEmail}</a> {" "}
          for more details.
        </p>
      </div>

      <section className={styles.pdfSection}>
        <div className={styles.pdfControls}>
          <button onClick={() => setPdfLang("en")} disabled={pdfLang === "en"}>
            English
          </button>
          <button onClick={() => setPdfLang("fr")} disabled={pdfLang === "fr"}>
            Français
          </button>
        </div>
        <iframe
          src={`/documents/sponsorship-package-${pdfLang}.pdf`}
          width="100%"
          height="800px"
          title="Sponsorship Package"
        />
      </section>
    </Container>
  );
}
