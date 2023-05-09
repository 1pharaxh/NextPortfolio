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
      <div className="card group overflow-hidden h-full md:h-[600px] lg:h-[320px]  rounded-3xl border px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <StarText text="Full Stack Web Developer" />
        <div className="flex flex-col gap-3">
          <p className={`m-0  text-base md:text-sm opacity-100`}>
            based in Edmonton, CA. I am deeply passionate about creating
            applications that people enjoy using every day, and I strive to
            deliver high-quality products that meet the needs of users.
          </p>

          <p className={`m-0  text-base md:text-sm opacity-100`}>
            As a programmer, I have a strong command over a range of programming
            languages, including JavaScript, Python, C++, Java, and Dart. When
            I'm not coding, I'm always looking to expand my knowledge and
            explore new ideas and concepts related to computing, economics, or
            mathematics.
          </p>

          <p className={`m-0  text-base md:text-sm opacity-100`}>
            One of my current projects is XYZ - an open source, self-hosted
            application designed to enable users to BYZ, specifically tailored
            for the XUA-BDA community. I am excited about the potential impact
            of this project and am committed to seeing it through to completion.
          </p>

          <p className={`m-0  text-base md:text-sm opacity-100`}>
            Overall, I am a dedicated and hard-working developer who is always
            looking for new challenges and opportunities to learn and grow. If
            you're interested in working with me or learning more about my
            skills and experience, please don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </Tilt>
  );
}
