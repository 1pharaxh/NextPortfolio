"use client";
import { useEffect, useRef } from "react";

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star: Element) => {
  // @ts-ignore

  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  // @ts-ignore

  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  // @ts-ignore

  star.style.animation = "none";
  // @ts-ignore

  star.offsetHeight;
  // @ts-ignore

  star.style.animation = "";
};
export default function StarText({ children }: { children: React.ReactNode }) {
  const starRef = useRef(null);

  let index = 0,
    interval = 1000;

  useEffect(() => {
    const stars = document.getElementsByClassName("magic-star");
    const starsArray = Array.from(stars);
    for (const star of starsArray) {
      setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
      }, index++ * (interval / 3));
    }
  }, []);
  return (
    <h1 className="inline-block px-1">
      <span className={"magic"}>
        <span ref={starRef} className={"magic-star"}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span ref={starRef} className={"magic-star"}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span ref={starRef} className={"magic-star"}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span
          className={
            "magic-text md:text-lg lg:text-base xl:text-xl font-semibold"
          }
        >
          {children}
        </span>
      </span>
    </h1>
  );
}
