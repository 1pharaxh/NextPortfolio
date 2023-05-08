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
    <div className="card group h-full rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
      <h2 className={`mb-3 text-2xl font-semibold`}>Resume Card</h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
    </div>
  );
}
