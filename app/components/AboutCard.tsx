import { Tilt } from "react-tilt";

import StarText from "./StarText";
interface AboutCardProps {
  // define the props for the SocialsCard component here
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      AboutCard: AboutCardProps;
    }
  }
}
export default function AboutCard({ className = "" }: AboutCardProps) {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1500, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <div className="card group overflow-hidden flex flex-col px-4 py-4 justify-center items-start h-full md:h-[600px] lg:h-[320px]  rounded-3xl border transition-colors border-neutral-700 bg-neutral-800/30">
        <div className="flex flex-col gap-3">
          <div className={`m-0  text-base md:text-lg opacity-100`}>
            <StarText
              beforeText=" Hi, I'm Akarshan Mishra, a"
              starText="Frontend, Backend and Flutter Developer"
              afterText="based in Edmonton, 🍁 CA. I am deeply passionate about creating
          applications that people enjoy using every day, and I strive to
          deliver high-quality products that meet the needs of users."
            />
          </div>

          <div className={`m-0  text-base md:text-lg opacity-100`}>
            <StarText
              beforeText=" As a programmer, I have a strong command over a range of programming
              languages, including "
              starText=" JavaScript, Python, C++, Java, and Dart."
              afterText=" When I'm not coding, I'm
              always looking to expand my knowledge and explore new ideas and
              concepts related to computing, economics, or mathematics."
            />
          </div>

          <div className={`m-0  text-base md:text-lg opacity-100`}>
            <StarText
              beforeText=" If you're interested in working with me or learning more about my
              skills and experience, please don't hesitate "
              starText=" to get in touch! "
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
