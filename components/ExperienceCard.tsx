import styles from "@/styles/ExperienceCard.module.css";
import { SanityDocument } from "next-sanity";

const ExperienceCard = ({ data }: { data: SanityDocument[] }) => {
  return (
    <div className="rounded-3xl w-auto flex flex-col h-full items-center justify-center px-5 py-4">
      <h2 className="mb-3 text-3xl md:text-5xl text-center md:text-start font-semibold">
        Work{" "}
        <span className="bg-gradient-to-br from-green-200 to-green-500 bg-clip-text font-bold text-transparent">
          Experience
        </span>
      </h2>
      <ul className={styles.timeline}>
        {data.map((item: any, index: number) => (
          <li key={item._key}>
            <div
              className={
                index % 2 === 0 ? styles["direction-r"] : styles["direction-l"]
              }
            >
              <div className={styles["flag-wrapper"]}>
                <span className={styles["flag"]}>{item.companyName}</span>
                <span className={styles["time-wrapper"]}>
                  <span className={styles["time"]}>
                    {item.startDate} - {item.endDate}
                  </span>
                </span>
              </div>
              <div className={styles["desc"]}>
                <p>
                  <b>{item.jobTitle}</b>
                </p>
                <br />
                {item.description.map((desc: string, index: number) => (
                  <div key={index}>
                    <p>● {desc}</p>
                    {index < item.description.length - 1 && <br />}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceCard;
