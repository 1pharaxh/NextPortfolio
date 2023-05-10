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
  return (
    <div
      // open /resume.latest.pdf in a new tab
      onClick={() => {
        window.open("/resume_akarshan_mishra.pdf", "_blank");
      }}
      className="cursor-pointer card group h-full rounded-3xl overflow-hidden border transition-colors border-neutral-700 bg-neutral-800/30"
    >
      {/* <h2
        className={`mb-3 z-20 text-6xl font-extrabold text-center absolute inset-0 flex items-center justify-center`}
      >
        Check out my resume!
      </h2> */}
      <MarqueeText text="MY RESUME" />
      <MarqueeText text="CHECK OUT MY RESUME" />
    </div>
  );
}
