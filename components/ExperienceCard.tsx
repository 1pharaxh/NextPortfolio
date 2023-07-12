import styles from "@/styles/ExperienceCard.module.css";

export default function ExperienceCard() {
  return (
    <div
      className={
        "rounded-3xl w-auto flex flex-col h-full items-center justify-center  px-5 py-4 "
      }
    >
      <h2
        className={`mb-3 text-3xl md:text-5xl text-center md:text-start font-semibold`}
      >
        Work{" "}
        <span className="bg-gradient-to-br from-green-200 to-green-500 bg-clip-text font-bold text-transparent">
          Experience
        </span>
      </h2>
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
                ● Developed an energy usage visualization app for Android that
                reduced energy consumption by end-users.
              </p>
              <br />
              <p>
                ● Enhanced app functionality and user experience by creating
                customized Vue.js and Javascript widgets.
              </p>{" "}
              <br />
              <p>
                ● Integrated push notifications with Google Firebase to ensure
                timely updates and alerts.
              </p>
              <br />
              <p>
                ● Conducted log-linear analysis using Python's Scikit-Learn
                library and created UI chart components using Vue.js and
                ChartJs.
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
                ● Recommended solutions to clients based on time and resource
                constraints.
              </p>
              <br />
              <p>
                ● Created project reports and quotes tailored to client
                requirements and budget.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
