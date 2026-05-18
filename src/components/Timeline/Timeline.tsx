import styles from "./Timeline.module.css";
import { teamHistoryYears } from "../../data/teamHistory";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PrizeList } from "./PrizeList";

export default function Timeline() {
  return (
    <section id="timeline" className={styles.timelineSection}>
      <div className={styles.container}>
        <VerticalTimeline className={styles.verticalTimeline} lineColor="black">
          {teamHistoryYears.map((yearData) => (
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                padding: "0px",
                margin: "0",
              }}
              key={yearData.year}
              className={styles.timelineElement}
              iconStyle={{ background: "black" }}
            >
              <div className={styles.timelineContent}>
                <h3 className={styles.yearTitle}>
                  {yearData.year} - {yearData.location}
                </h3>
                <p className={styles.summaryText}>{yearData.summary}</p>

                {yearData.teamPhotoSrc && (
                  <img
                    src={yearData.teamPhotoSrc}
                    alt={`Team in ${yearData.year}`}
                    className={styles.teamPhoto}
                    loading="lazy"
                  />
                )}

                {yearData.prizes && yearData.prizes.length > 0 && (
                  <div className={styles.prizesContainer}>
                    <h4 className={styles.prizesTitle}>Achievements</h4>
                    <PrizeList prizes={yearData.prizes} />
                  </div>
                )}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
