interface ProjectsProps {
  // define the props for the NameCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      Projects: ProjectsProps;
    }
  }
}
export default function Projects() {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-col w-3/4 gap-2">
        <div className="card group rounded-3xl h-3/4 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Proj 1</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Card Subheading
          </p>
        </div>
        <div className="card group rounded-3xl h-1/4 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Card Subheading
          </p>
        </div>
      </div>
      <div className="card w-1/4 h-[400px] group rounded-3xl  border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>
    </div>
  );
}
