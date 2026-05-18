import styles from "./Footer.module.css";

export function OrgLogoStrip() {
  const logos = [
    {
      id: "concordia",
      label: "Concordia",
      src: "/pictures/about-us/concordia.png",
    },
    { id: "csce", label: "CSCE", src: "/pictures/about-us/csce.png" },
    { id: "eca", label: "ECA", src: "/pictures/about-us/eca.png" },
  ];
  const first = logos.slice(0, 1);
  logos.shift();
  const others = logos;

  return (
    <div className={styles.logoStrip} aria-label="Partner organizations">
      {first.map((l) => (
        <img
          key={l.id}
          className={styles.logoFirst}
          src={l.src}
          alt={l.label}
          loading="lazy"
        />
      ))}
      {others.map((l) => (
        <img
          key={l.id}
          className={styles.logo}
          src={l.src}
          alt={l.label}
          loading="lazy"
        />
      ))}
    </div>
  );
}
