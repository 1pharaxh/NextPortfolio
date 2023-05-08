"use client";
import NameCard from "./components/NameCard";
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
    <main className="flex min-h-screen gap-4 flex-col md:items-center p-4 md:p-24">
      <NameCard />

      <div
        onMouseMove={handleMouseMove}
        className="card group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>

      <div
        onMouseMove={handleMouseMove}
        className="card group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>

      <div
        onMouseMove={handleMouseMove}
        className="card left-0 top-0 flex justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static w-auto  rounded-3xl border  p-4 "
      >
        Written in Typescript, React, NextJs and tailwindcss, deployed with
        Vercel. Created by Akarshan Mishra.
      </div>
    </main>
  );
}
