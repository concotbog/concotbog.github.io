import type { TeamPrize } from "../../data/teamHistory";
import styles from "./Timeline.module.css";

const emojis = ["🥇", "🥈", "🥉"];

export function PrizeList({ prizes }: Readonly<{ prizes: TeamPrize[] }>) {
  if (prizes.length === 0) return null;
  prizes.sort((a, b) => a.place - b.place);
  return (
    <ul className={styles.prizeList}>
      {prizes.map((p) => (
        <li key={p.id} className={styles.prizeItem}>
          <span className={styles.medal}>{emojis[p.place - 1] || "🏆"}</span>
          <span>{p.label}</span>
        </li>
      ))}
    </ul>
  );
}
