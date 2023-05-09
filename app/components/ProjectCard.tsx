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
        <SwiperSlide>
          <Projects />
        </SwiperSlide>

        <SwiperSlide>
          <Projects />
        </SwiperSlide>

        <SwiperSlide>
          <Projects />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
