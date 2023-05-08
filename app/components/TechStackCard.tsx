import { CSSProperties } from "react";

import style from "../styles/TechStackCard.module.css";
import Image from "next/image";

interface TechStackCardProps {
  // define the props for the NameCard component here
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      TechStackCard: TechStackCardProps;
    }
  }
}

export default function TechStackCard({ className = "" }: TechStackCardProps) {
  const TAGS = [
    "android",
    "github",
    "docker",
    "expressjs",
    "firebase",
    "flask",
    "flutter",
    "html",
    "ionic",
    "java",
    "javascript",
    "linux",
    "mongodb",
    "nodejs",
    "photoshop",
    "postman",
    "python",
    "react",
    "tensorflow",
    "threejs",
    "typescript",
    "vuejs",
    "arduino",
    "bash",
    "bootstrap",
    "capacitor",
    "cordova",
    "css",
    "next",
  ];
  const DURATION = 15000;
  const ROWS = 5;
  const TAGS_PER_ROW = 5;

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr: any[]) => [...arr].sort(() => 0.5 - Math.random());
  return (
    <div
      className={
        `group rounded-3xl  border  transition-colors border-neutral-700 bg-neutral-800/30 w-auto` +
        className
      }
    >
      <div className={style["tag-list"]}>
        {[...new Array(ROWS)].map((_, i) => (
          <div
            key={i}
            className={style["loop-slider"]}
            style={
              {
                "--duration": `${random(DURATION - 5000, DURATION + 5000)}ms`,
                "--direction": i % 2 ? "reverse" : "normal",
              } as CSSProperties
            }
          >
            <div className={style["inner"]}>
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <div key={tag} className={style["tag"]}>
                    <Image
                      src={"/" + tag + "-cropped" + ".svg"}
                      width={50}
                      height={50}
                      alt={tag + " logo"}
                    />
                  </div>
                ))}
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <div key={tag} className={style["tag"]}>
                    <Image
                      src={"/" + tag + "-cropped" + ".svg"}
                      width={50}
                      height={50}
                      alt={tag + " logo"}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div>
          <h1 className="text-center">
            <span className="font-extrabold text-xl">My TECH STACK </span>
            <span className=" text-base opacity-50">in 2023</span>
          </h1>
        </div>
        <div className={style["fade"]} />
      </div>
    </div>
  );
}
