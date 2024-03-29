"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Projects from "./Projects";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Properties } from "csstype";
import { SanityDocument } from "next-sanity";

interface SwiperStyle extends Properties {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bullet-horizontal-gap"?: string;
}

export default function ProjectCard({
  projectArr = [],
  hide = false,
}: {
  projectArr: SanityDocument[];
  hide?: boolean;
}) {
  return (
    <div
      id="projectssection"
      className={`w-full px-[1px]
    ${hide ? "blur-lg" : ""}
    `}
    >
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
        speed={1200}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper overflow-hidden"
      >
        {projectArr.map((project, index) => (
          <SwiperSlide key={index}>
            <Projects
              githubLink={project.githubLink}
              title={project.title}
              objClass={project.objClass}
              projectlink={project.projectlink}
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
