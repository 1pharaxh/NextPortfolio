import Image from "next/image";

interface ProjectsProps {
  // define the props for the NameCard component here
  title?: string;
  githubLink?: string;
  description?: Array<string>;
  techStack?: Array<string>;
  projectImage?: string;
  projectlink?: string;
  objClass?: string;
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
  objClass = "object-cover",
  techStack = [],
  projectImage = "",
  projectlink = "",
}: ProjectsProps) {
  return (
    <div className="flex flex-row gap-2 w-full  transition-colors border border-neutral-700 md:border-0 md:p-[1px] p-1 rounded-3xl">
      <div className="flex flex-col w-full md:w-3/4 gap-2">
        <div className="md:hidden overflow-hidden card block w-full h-[250px] group rounded-3xl  border transition-colors border-neutral-700 bg-neutral-800/30">
          <Image
            src={projectImage}
            alt={`Project Image`}
            width={1000}
            className={"h-[250px] w-full " + objClass}
            height={1000}
          />
        </div>
        <div className=" group rounded-3xl h-auto  md:h-4/6 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <div className="flex flex-row gap-2 items-center justify-between">
            <h2
              onClick={() => {
                window.open(githubLink, "_blank");
              }}
              className={`cursor-pointer mb-3 text-2xl font-semibold hover:underline hover:italic text-center`}
            >
              {title}
            </h2>
            <div className="flex flex-row gap-2">
              <Image
                src="/project-github.svg"
                alt={`Github Logo`}
                width={0}
                className="h-[30px] w-[30px] cursor-pointer hover:bg-white/30 rounded-lg"
                height={0}
                onClick={() => {
                  window.open(githubLink, "_blank");
                }}
              />
              <Image
                src="/project-link.svg"
                alt={`Link Logo`}
                width={0}
                className={`${
                  projectlink === "" ? "hidden" : "block"
                } h-[30px] w-[30px] cursor-pointer hover:bg-white/30 rounded-lg`}
                height={0}
                onClick={() => {
                  window.open(projectlink, "_blank");
                }}
              />
            </div>
          </div>
          <div className={`m-0  text-sm opacity-50 flex flex-col gap-2`}>
            {description.map((desc, index) => (
              <p key={index}> ● {desc}</p>
            ))}
          </div>
        </div>
        <div className="card group rounded-3xl h-auto md:h-2/6 border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Tech Stack</h2>
          <div className="flex flex-row gap-2 overflow-clip">
            {techStack.map((tech, index) => (
              <Image
                key={index}
                src={`/${tech}.svg`}
                alt={`${tech} svg`}
                width={0}
                className="h-[40px] w-[40px]"
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
          className={"h-[400px] w-full " + objClass}
          height={1000}
        />
      </div>
    </div>
  );
}
