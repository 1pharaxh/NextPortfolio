"use client";
import { CSSProperties } from "react";

import style from "@/styles/TechStackCard.module.css";
import Image from "next/image";
import seedrandom from "seedrandom";
import { cn } from "@/lib/utils";

export default function TechStackCard({
  className = "",
}: {
  className?: string;
}) {
  const year: number = new Date().getFullYear();

  const TAGMAP: {
    [key: string]: string;
  } = {
    react: "https://reactjs.org/",
    typescript: "https://www.typescriptlang.org/",
    express: "https://expressjs.com/",
    flutter: "https://flutter.dev/",
    nextjs: "https://nextjs.org/",
    tailwind: "https://tailwindcss.com/",
    git: "https://git-scm.com/",
    nodejs: "https://nodejs.org/en/",
    mongodb: "https://www.mongodb.com/",
    java: "https://www.java.com/en/",
    gradle: "https://gradle.org/",
    github_logo: "https:github.com/",
    vscode: "https://code.visualstudio.com/",
    html: "https://html.com/",
    css: "https://www.w3schools.com/css/",
    javascript: "https://www.javascript.com/",
    python: "https://www.python.org/",
    cpp: "https://www.cplusplus.com/",
    figma: "https://www.figma.com/",
    vite: "https://vitejs.dev/",
    gcp: "https://cloud.google.com/",
    firebase: "https://firebase.google.com/",
    androidstudio: "https://developer.android.com/studio",
    mysql: "https://www.mysql.com/",
  };
  const TAGS = [
    "react",
    "typescript",
    "nextjs",
    "express",
    "flutter",
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
    "androidstudio",
    "mysql",
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
    <>
      <div
        className={cn(
          `group min-h-full min-w-full  flex-col flex items-center justify-center `,
          className
        )}
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
                    <div
                      key={tag}
                      onClick={() => window.open(TAGMAP[tag])}
                      className={
                        style["tag"] +
                        " hover:opacity-50 opacity-100 cursor-pointer transition-all"
                      }
                    >
                      <Image
                        src={`/${tag}.svg`}
                        alt={tag}
                        className="h-[50px] w-[50px]"
                        width={40}
                        height={40}
                      />
                      <span></span>
                    </div>
                  ))}
                {shuffle(TAGS, i)
                  .slice(0, TAGS_PER_ROW)
                  .map((tag) => (
                    <div
                      key={tag}
                      onClick={() => window.open(TAGMAP[tag])}
                      className={
                        style["tag"] +
                        " hover:opacity-50 opacity-100 cursor-pointer transition-all"
                      }
                    >
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
              <span className=" text-base opacity-50">in {year}</span>
            </h1>
          </div>
          <div className={style["fade"]} />
        </div>
      </div>
    </>
  );
}
