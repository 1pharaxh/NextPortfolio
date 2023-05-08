"use client";
import NameCard from "./components/NameCard";
import SocialsCard from "./components/SocialsCard";
import TechStackCard from "./components/TechStackCard";
export default function Home() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cards = Array.from(document.getElementsByClassName("card"));
    for (let card of cards) {
      const cardElement = card as HTMLDivElement;
      const rect = cardElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardElement.style.setProperty("--mouse-x", `${x}px`);
      cardElement.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <main
      onMouseMove={handleMouseMove}
      className="flex min-h-screen gap-2 flex-col md:items-center p-4 md:p-24 "
    >
      <div className="flex flex-col w-full items-center md:items-stretch md:flex-row gap-4 md:gap-2">
        <div className="flex-initial w-full md:w-4/6">
          <NameCard />
        </div>
        <div className="flex-initial w-full md:w-2/6">
          <SocialsCard />
        </div>
      </div>

      <TechStackCard />

      <div className="card group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>

      <div className="card group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>

      <div className="card left-0 top-0 flex justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static w-auto  rounded-3xl border  p-4 ">
        Written in Typescript, React, NextJs and tailwindcss, deployed with
        Vercel. Created by Akarshan Mishra.
      </div>
    </main>
  );
}
