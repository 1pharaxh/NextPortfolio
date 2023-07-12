import Image from "next/image";
import { Spotlight } from "./ui/card";
import dynamic from "next/dynamic";
const SpotlightCard = dynamic(() => import("./ui/SpotlightCard"), {
  ssr: false,
});
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
    <>
      <div className="flex flex-row gap-2 w-full   md:p-[1px] p-1 rounded-3xl">
        <Spotlight className="flex flex-col w-full md:w-3/4 gap-2 group/card">
          <SpotlightCard
            tilt={false}
            gradient={true}
            className="md:hidden overflow-hidden block w-full h-[250px] group "
          >
            <Image
              src={projectImage}
              alt={`Project Image`}
              width={1000}
              className={"h-[250px] w-full " + objClass}
              height={1000}
            />
          </SpotlightCard>
          <Spotlight className=" h-auto  md:h-4/6 group/card ">
            <SpotlightCard tilt={false}>
              <div className="flex flex-row gap-1 items-center justify-between px-4 py-5">
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
              <div
                className={`m-0 pb-4  text-sm opacity-50 flex flex-col gap-2`}
              >
                {description.map((desc, index) => (
                  <p className="pl-4" key={index}>
                    {" "}
                    ● {desc}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </Spotlight>
          <Spotlight className=" h-auto md:h-2/6 group/card">
            <SpotlightCard tilt={false} className=" ">
              <div className="px-4 py-5">
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
            </SpotlightCard>
          </Spotlight>
        </Spotlight>
        <Spotlight className=" overflow-hidden w-0 hidden md:block md:w-1/4 h-[400px] group/card ">
          <SpotlightCard tilt={false}>
            <Image
              src={projectImage}
              alt={`Project Image`}
              width={1000}
              className={"h-[400px] w-full " + objClass}
              height={1000}
            />
          </SpotlightCard>
        </Spotlight>
      </div>
    </>
  );
}
