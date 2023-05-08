import { CSSProperties } from "react";

import style from "../styles/TechStackCard.module.css";
import Image from "next/image";
import seedrandom from "seedrandom";

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
    "bash",
    "react",
    "typescript",
    "flutter",
    "nextjs",
    "tailwind",
    "git",
    "nodejs",
    "mongodb",
    "java",
    "gradle",
    "github_logo",
    "vscode",
    "html",
    "css",
    "javascript",
    "python",
    "cpp",
    "figma",
    "vite",
    "gcp",
    "firebase",
    "python",
    "androidstudio",
    "mysql",
    "bash",
  ];
  const DURATION = 60000;
  const ROWS = 3;
  const TAGS_PER_ROW = 29;

  const random = (min: number, max: number) =>
    Math.floor(0.689 * (max - min)) + min;

  const shuffle = (arr: any[], row: number) => {
    const seed = row + 1; // use row number as seed value
    const rng = seedrandom(seed.toString()); // initialize random number generator
    return [...arr].sort(() => rng() - 0.523); // shuffle the array using the random number generator
  };
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
              {shuffle(TAGS, i)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <div key={tag} className={style["tag"]}>
                    <Image
                      src={`/${tag}.svg`}
                      alt={tag}
                      width={40}
                      height={40}
                    />
                    <span></span>
                  </div>
                ))}
              {shuffle(TAGS, i)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <div key={tag} className={style["tag"]}>
                    <Image
                      src={`/${tag}.svg`}
                      alt={tag}
                      width={0}
                      className="h-[50px] w-[50px]"
                      height={0}
                    />
                    <span></span>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div>
          <h1 className="text-center">
            <i className="fab fa-react" />

            <span className="font-extrabold text-xl">My TECH STACK </span>
            <span className=" text-base opacity-50">in 2023</span>
          </h1>
        </div>
        <div className={style["fade"]} />
      </div>
    </div>
  );
}
