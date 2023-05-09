import styles from "../styles/ExperienceCard.module.css";
interface ExperienceCardProps {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ExperienceCard: ExperienceCardProps;
    }
  }
}
export default function ExperienceCard() {
  return (
    <div
      className={
        "card group rounded-3xl w-full  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
      }
    >
      <ul className={styles.timeline}>
        <li>
          <div className={styles["direction-r"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles["flag"]}>Adewunmi Skincare</span>
              <span className={styles["time-wrapper"]}>
                <span className={styles["time"]}>May 2023 - Present</span>
              </span>
            </div>
            <div className={styles.desc}>
              <p>
                <b>Frontend Developer Intern</b>
              </p>
              <br />
              <p>
                ● Designed and Developed various web pages using Figma, MUI and
                React
              </p>
              <br />
            </div>
          </div>
        </li>

        <li>
          <div className={styles["direction-l"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles.flag}>GreyJay Energy.</span>
              <span className={styles["time-wrapper"]}>
                <span className={styles.time}>Jun 2022 - Aug 2022</span>
              </span>
            </div>
            <div className={styles.desc}>
              <p>
                <b>Software Developer Intern</b>
              </p>
              <br />
              <p>
                ● Developed an android app that visualizes energy usage and
                empowers users to make informed decisions, resulting in reduced
                energy consumption by end-users.
              </p>
              <br />
              <p>
                ● Created customized widgets in the app using Vue.js and
                Javascript to improve the user experience and enhance the
                functionality of the app.
              </p>{" "}
              <br />
              <p>
                ● Integrated push notifications in the app with Google Firebase
                to ensure timely updates and alerts for users.
              </p>
              <br />
              <p>
                ● Conducted log-linear analysis on data using Python's
                Scikit-Learn (sklearn) library to make future predictions and
                used Vue.js and ChartJs to create UI chart components.{" "}
              </p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles["direction-r"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles["flag"]}>Better Drones</span>
              <span className={styles["time-wrapper"]}>
                <span className={styles["time"]}>Oct 2018 - Jan 2019</span>
              </span>
            </div>
            <div className={styles["desc"]}>
              <p>
                <b>Engineering Intern</b>
              </p>
              <p>
                ● Analyzed options available for client needs and recommended
                solutions based on time and resource considerations, which led
                to acquiring new projects.
              </p>
              <br />
              <p>
                ● Developed reports and quotations about project specifications
                for clients based around their requirements and budget.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
