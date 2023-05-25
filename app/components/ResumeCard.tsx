import { Tilt } from "react-tilt";
import MarqueeText from "./MarqueeText";
interface ResumeCardProps {
  // define the props for the ResumeCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ResumeCard: ResumeCardProps;
    }
  }
}

export default function ResumeCard() {
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
      <div
        // open /resume.latest.pdf in a new tab
        onClick={() => {
          window.open("/resume_akarshan_mishra.pdf", "_blank");
        }}
        className="cursor-pointer card group h-full flex flex-col py-2 rounded-3xl overflow-hidden border 
        transition-colors border-neutral-700 bg-neutral-800/30"
      >
        <MarqueeText text="MY RESUME" />
        <MarqueeText text="Tap here!" />
      </div>
    </Tilt>
  );
}
