"use client";
import style from "../styles/NameCard.module.css";
import { Tilt } from "react-tilt";

import Image from "next/image";
import { useRef } from "react";
interface NameCardProps {
  // define the props for the NameCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      NameCard: NameCardProps;
    }
  }
}
export default function NameCard() {
  const cardsRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardsRef.current) return;
    const card: HTMLDivElement = cardsRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 8, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <div
        ref={cardsRef}
        onMouseMove={handleMouseMove}
        className="card h-auto md:h-36 group rounded-3xl border px-5 flex flex-col items-center md:flex-row gap-4 py-10 md:py-4 transition-colors border-neutral-700 bg-neutral-800/30"
      >
        <Image
          className="h-[250px] md:h-[110px] hover:rotate-3 hover:scale-110 transition-all duration-500 ease-in-out z-10"
          src="/akarshan.jpeg"
          alt="Picture of the author"
          width="0"
          priority
          height="0"
          sizes="100vw"
          style={{ width: "auto", borderRadius: "9999px" }}
        />
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h1 className={style.title + ` text-4xl md:text-3xl lg:text-4xl`}>
            Akarshan Mishra, 19
            <div className={style.aurora}>
              <div className={style.aurora__item}></div>
              <div className={style.aurora__item}></div>
              <div className={style.aurora__item}></div>

              <div className={style.aurora__item}></div>
            </div>
          </h1>
          <p className={`m-0 max-w-[30ch] text-base md:text-sm opacity-50`}>
            👨🏻‍💻Full stack Developer
          </p>
          <p className={`m-0 max-w-[30ch] text-base md:text-sm opacity-50`}>
            🧠Student at uAlberta'25
          </p>
        </div>
      </div>
    </Tilt>
  );
}
