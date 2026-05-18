import styles from "./Hero.module.css";
import { ScrollParallax } from "react-just-parallax";

export function Hero({
  title,
  subtitle,
  backgroundImageSrc,
}: Readonly<{
  title: string;
  subtitle?: string;
  backgroundImageSrc?: string;
}>) {
  return (
    <section className={styles.hero}>
      {backgroundImageSrc ? (
        <ScrollParallax isAbsolutelyPositioned strength={0.2} shouldPause>
          <div
            className={styles.bg}
            style={{ backgroundImage: `url("${backgroundImageSrc}")` }}
            aria-hidden="true"
          />
        </ScrollParallax>
      ) : null}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.kicker}>Concordia University</div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
    </section>
  );
}
