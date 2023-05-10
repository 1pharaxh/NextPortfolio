import Image from "next/image";

interface ProjectsProps {
  // define the props for the NameCard component here
  title?: string;
  githubLink?: string;
  description?: Array<string>;
  techStack?: Array<string>;
  projectImage?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      Projects: ProjectsProps;
    }
  }
}
export default function Projects({
  title = "",
  githubLink = "",
  description = [],
  techStack = [],
  projectImage = "",
}: ProjectsProps) {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-col w-full md:w-3/4 gap-2">
        <div className=" group rounded-3xl h-full md:h-4/6 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <h2
            onClick={() => {
              window.open(githubLink, "_blank");
            }}
            className={`cursor-pointer mb-3 text-2xl font-semibold hover:underline hover:italic`}
          >
            {title}
          </h2>
          <div className={`m-0  text-sm opacity-50 flex flex-col gap-2`}>
            {description.map((desc, index) => (
              <p key={index}> ● {desc}</p>
            ))}
          </div>
        </div>
        <div className="card group rounded-3xl h-full md:h-2/6 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Tech Stack</h2>
          <div className="flex flex-row gap-2 overflow-clip">
            {techStack.map((tech, index) => (
              <Image
                key={index}
                src={`/${tech}.svg`}
                alt={`${tech} svg`}
                width={0}
                className="h-[40px] w-[50px]"
                height={0}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" overflow-hidden w-0 hidden md:card md:block md:w-1/4 h-[400px] group rounded-3xl  border transition-colors border-neutral-700 bg-neutral-800/30">
        <Image
          src={projectImage}
          alt={`Project Image`}
          width={1000}
          className="h-[400px] w-full object-cover"
          height={1000}
        />
      </div>
    </div>
  );
}
