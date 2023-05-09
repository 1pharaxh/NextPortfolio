"use client";
import NameCard from "./components/NameCard";
import SocialsCard from "./components/SocialsCard";
import TechStackCard from "./components/TechStackCard";
import AboutCard from "./components/AboutCard";
import ResumeCard from "./components/ResumeCard";
import CodeBlockCard from "./components/CodeBlockCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  // Hook to check if user has scrolled down
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <div className={hasScrolled ? `hidden transition-all` : `scroll-downs `}>
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center md:items-stretch md:flex-row gap-4 md:gap-2">
        <div className="flex-initial w-full md:w-2/6">
          <TechStackCard />
        </div>
        <div className="flex-initial w-full md:w-4/6">
          <AboutCard />
        </div>
      </div>

      <div className="flex flex-col w-full items-center md:items-stretch md:flex-row gap-4 md:gap-2">
        <div className="flex-initial w-full md:w-3/6 lg:w-4/6">
          <ExperienceCard />
        </div>

        <div className="flex-initial w-full md:w-3/6 lg:w-2/6">
          <div className="flex flex-col h-full gap-2 justify-between">
            <div className="flex-initial ">
              <ResumeCard />
            </div>
            <div className="flex-initial ">
              <CodeBlockCard />
            </div>
          </div>
        </div>
      </div>
      <ProjectCard />

      {/* <div className="card group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div> */}

      <div className="card text-center w-full left-0 top-0 flex justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static  rounded-3xl border  p-4 ">
        Written in Typescript, React, NextJs and tailwindcss, deployed with
        Vercel. Created by Akarshan Mishra.
      </div>
    </main>
  );
}
