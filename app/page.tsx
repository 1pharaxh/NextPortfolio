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

const projectArr = [
  {
    title: "Anubhava",
    githubLink: "https://github.com/1pharaxh/ignite",
    projectlink: "https://anubhava.ignitesgtb.com/",
    description: [
      "Created a web app allows students to apply to internships and jobs and allows admin to post internships and jobs and view applications",
      "Implemented a REST API using Node.js and Express.js to handle job posting and listing",
      "Handled user authentication, user data storage using firebase",
      "Designed a responsive UI using React.js and Tailwind CSS",
    ],
    techStack: [
      "react",
      "tailwind",
      "nodejs",
      "express",
      "mongodb",
      "firebase",
    ],
    objClass: "object-cover",
    imageLink:
      "https://user-images.githubusercontent.com/93630550/234092935-63c5a587-77d1-4e91-bfa5-84d327ce8fab.png",
  },
  {
    title: "Portfolio Website",
    githubLink: "https://github.com/1pharaxh/NextPortfolio",
    projectlink: "https://akarshan.vercel.app/",
    description: [
      "My personal portfolio website to showcase my projects and skills",
      "Used Next.js to create a responsive website with server side rendering",
      "Used Tailwind CSS to style the website",
    ],
    objClass: "object-contain",
    techStack: ["react", "tailwind", "nextjs", "typescript"],
    imageLink: "/personalWebsite.png",
  },
  {
    title: "QR GO App",
    projectlink: "",
    githubLink: "https://github.com/CMPUT301W23T10/QRgo",
    description: [
      "An android app that allows users to scan QR codes as Pokemons and battle with other users",
      "Implemented UI using Android Studio and Java",
      "Wrote tests using JUnit and Mockito and Implemented CI/CD using Github Actions",
      "Used Firebase to store user data and QR data",
    ],
    techStack: ["androidstudio", "java", "firebase", "github_logo"],
    objClass: "object-contain",
    imageLink:
      "https://user-images.githubusercontent.com/93630550/227075443-d0f9164d-41be-4041-8c38-6f2cd56c8d8f.png",
  },
  {
    title: "Fit AI",
    projectlink: "",
    githubLink: "https://github.com/fardeenfs/FitAI-405FoundNow",
    objClass: "object-contain",
    description: [
      "Created a flutter app for users to track their fitness and health",
      "Used Tensorflow to train a model to detect exercises",
      "Stored user data using on-device storage",
    ],
    techStack: ["flutter", "androidstudio", "tensorflow"],
    imageLink: "/fitai.png",
  },
  {
    title: "ASL Classifier App",
    projectlink: "",
    objClass: "object-cover",
    githubLink: "https://github.com/1akarshan/hacked-beta",
    description: [
      "An android app that quizzes users on American sign language and recognizes their signed answers. Awarded 'Best Hack' out of 30 projects at HackED Beta 2022.",
      "Leveraged Vue.js, Ionic, and Django REST framework to create a robust front-end and back-end. Employed TensorFlow and MediaPipe neural network to achieve 85-90% accuracy in classifying users' gestures.",
      "Stored user data using on-device storage",
    ],
    techStack: ["vue", "python", "django", "tensorflow"],
    imageLink: "/aslingo.jpg",
  },
  {
    title: "Course Scheduler",
    projectlink: "https://ualberta-sched.netlify.app/",
    objClass: "object-contain",
    githubLink: "https://github.com/1pharaxh/uAlberta-course-scheduler",
    description: [
      "Web app aimed at streamlining class scheduling for university  students by creating a google calendar like time table with the chosen courses and reducing drafting time",
      "Created a scraper with Puppeteer to extract course data and implemented a REST API using ExpressJS and NodeJS to store and retrieve the information in a MongoDB databas",
    ],
    techStack: ["vue", "mongodb", "nodejs", "express"],
    imageLink:
      "https://user-images.githubusercontent.com/93630550/184044160-baf0f193-83d5-475f-9d9a-dbb2abf70131.png",
  },
];
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
      className="flex min-h-screen gap-2 flex-col md:items-center p-4 md:p-16 "
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
              <CodeBlockCard
                numProjects={projectArr.length}
                text="
              I love to code and I'm always working on something new. Here are some of my projects:"
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectCard projectArr={projectArr} />

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
