interface ProjectCardProps {
  // define the props for the NameCard component here
  text?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ProjectCard: ProjectCardProps;
    }
  }
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Projects from "./Projects";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Properties } from "csstype";

interface SwiperStyle extends Properties {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bullet-horizontal-gap"?: string;
}

const map1 = [
  {
    title: "Projects",
    githubLink: "https://github.com/1pharaxh",
    description: [
      "Created a web app that allows users to create and share their own custom flashcards",
      "Implemented a REST API using Node.js and Express.js to handle user authentication and flashcard creation",
      "Designed a responsive UI using React.js and Tailwind CSS",
    ],
    techStack: ["react", "typescript", "nodejs", "express", "mongodb"],
    imageLink: "/default.jpeg",
  },
  {
    title: "Projects",
    githubLink: "https://github.com/1pharaxh",
    description: [
      "Created a web app that allows users to create and share their own custom flashcards",
      "Implemented a REST API using Node.js and Express.js to handle user authentication and flashcard creation",
      "Designed a responsive UI using React.js and Tailwind CSS",
    ],
    techStack: ["react", "typescript", "nodejs", "express", "mongodb"],
    imageLink: "/default.jpeg",
  },
  {
    title: "Projects",
    githubLink: "https://github.com/1pharaxh",
    description: [
      "Created a web app that allows users to create and share their own custom flashcards",
      "Implemented a REST API using Node.js and Express.js to handle user authentication and flashcard creation",
      "Designed a responsive UI using React.js and Tailwind CSS",
    ],
    techStack: ["react", "typescript", "nodejs", "express", "mongodb"],
    imageLink: "/default.jpeg",
  },
];

export default function ProjectCard() {
  return (
    <div className="w-full px-[1px]">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#78ddff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as SwiperStyle
        }
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper overflow-hidden"
      >
        {map1.map((project, index) => (
          <SwiperSlide key={index}>
            <Projects
              githubLink={project.githubLink}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              projectImage={project.imageLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
