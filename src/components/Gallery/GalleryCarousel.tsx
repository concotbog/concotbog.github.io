import { useEffect, useMemo, useState } from "react";
import type { Gallery } from "../../data/galleries";
import styles from "./GalleryCarousel.module.css";

export function GalleryCarousel({ gallery }: { gallery: Gallery }) {
  const [idx, setIdx] = useState(0);
  const active = gallery.images[idx];

  const canPrev = idx > 0;
  const canNext = true;
  const counter = useMemo(
    () => `${idx + 1} / ${gallery.images.length}`,
    [idx, gallery.images.length],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((current) => (current + 1) % gallery.images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [gallery.images.length]);

  if (!active) return null;

  return (
    <section className={styles.card} aria-label={gallery.title}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>{gallery.title}</div>
          <div className={styles.sub}>{counter}</div>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              setIdx(
                (v) => (v - 1 + gallery.images.length) % gallery.images.length,
              )
            }
            disabled={!canPrev}
          >
            Prev
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setIdx((v) => (v + 1) % gallery.images.length)}
            disabled={!canNext}
          >
            Next
          </button>
        </div>
      </div>

      <div className={styles.media}>
        <img
          key={active.src}
          className={styles.image}
          src={active.src}
          alt={active.alt}
        />
      </div>
    </section>
  );
}
