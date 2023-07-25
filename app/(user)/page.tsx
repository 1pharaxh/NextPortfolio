import NameCard from "@/components/NameCard";
import SocialsCard from "@/components/SocialsCard";
import TechStackCard from "@/components/TechStackCard";
import AboutCard from "@/components/AboutCard";
import ResumeCard from "@/components/ResumeCard";
import CodeBlockCard from "@/components/CodeBlockCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SearchButton from "@/components/SearchButton";
import Image from "next/image";
import { Spotlight } from "@/components/ui/card";

import SpotlightCard from "@/components/ui/SpotlightCard";
import HomeBlogMarqueeText from "@/components/HomeBlogMarqueeText";
import {
  getAllProjects,
  getHomeData,
  getHomeMetaData,
} from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { cachedClient } from "@/sanity/lib/client";
import { builder } from "@/sanity/lib/builder";
// import dynamic from "next/dynamic";
// const SpotlightCard = dynamic(() => import("@/components/ui/SpotlightCard"), {
//   ssr: false,
// });

export async function generateMetadata() {
  const data = await cachedClient(getHomeMetaData);
  return {
    title: data?.metadatatitle,
    description: data?.metadatadescription,
    creator: data?.metadatacreator,
    keywords: data?.metadatakeywords,
    alternates: {
      canonical: `/`,
    },
    openGraph: {
      url: "akarshan.vercel.app",
      title: data?.metadatatitle + " | Akarshan Mishra",
      description: data?.metadatadescription,
      siteName: "Akarshan Mishra's Portfolio",
      locale: "en_US",
      type: "website",
      authors: [data?.metadatacreator, "Akarshan"],
      images: [
        {
          url: builder
            .image(data?.metadataImage)
            .width(800)
            .height(500)
            .url() as string,
          width: 800,
          height: 500,
          alt: " A picture of Akarshan Mishra ",
        },
      ],
    },
  };
}
export default async function Home() {
  const data: SanityDocument = await cachedClient(getHomeData);
  const projectArr: SanityDocument[] = await cachedClient(getAllProjects);
  return (
    <>
      <main
        id="homeSection"
        className={`flex min-h-screen gap-2 flex-col md:items-center px-4 py-4 md:px-16 md:py-16 lg:px-32 lg:py-16 `}
      >
        {/* <Spotlight className="max-w-sm mx-auto grid gap-2 lg:grid-cols-3 items-start lg:max-w-none group">

      </Spotlight> */}
        <SearchButton />
        <Spotlight className="container mx-auto flex flex-col w-full items-center md:items-stretch gap-2 group/card">
          {/* Name and Socials  */}
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex-initial w-full md:w-4/6">
              <SpotlightCard gradient={true}>
                <NameCard />
              </SpotlightCard>
            </div>
            <HomeBlogMarqueeText className="md:hidden flex" />
            <div className="flex-initial w-full md:w-2/6">
              <SpotlightCard gradient={false} tilt={false}>
                <SocialsCard
                  LinkedInLink={data?.linkedin}
                  gitHubLink={data?.github}
                />
              </SpotlightCard>
            </div>
          </div>
          <HomeBlogMarqueeText className="hidden md:flex" />

          {/* About and Tech Stack */}
          <div className="flex flex-col lg:flex-row w-full gap-2">
            <div className="flex-initial w-full lg:w-2/6 ">
              <SpotlightCard gradient={true}>
                <TechStackCard className="flex-grow" />
              </SpotlightCard>
            </div>
            <div className="flex-initial w-full lg:w-4/6">
              <SpotlightCard gradient={false} tilt={false}>
                <AboutCard body={data?.about} />
              </SpotlightCard>
            </div>
          </div>
          {/* Work Experience, Resume and Project Section  */}
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex-initial w-full md:w-3/6 lg:w-4/6">
              <SpotlightCard
                id="workexperiencesection"
                gradient={true}
                tilt={false}
              >
                <ExperienceCard data={data?.experience} />
              </SpotlightCard>
            </div>
            <div className=" w-full md:w-3/6 lg:w-2/6">
              <Spotlight className="flex flex-col h-full gap-2 justify-between group/card">
                <SpotlightCard
                  id="resumesection"
                  className="flex-grow "
                  gradient={true}
                >
                  <ResumeCard file={data?.resumeFile} />
                </SpotlightCard>
                <SpotlightCard
                  className="flex-grow "
                  gradient={true}
                  tilt={false}
                >
                  <CodeBlockCard
                    numProjects={projectArr.length}
                    text={data?.codeblockText}
                  />
                </SpotlightCard>
              </Spotlight>
            </div>
          </div>
          {/* Project section  */}

          <ProjectCard projectArr={projectArr} />
          <SpotlightCard gradient={false} tilt={false}>
            <div className="p-4 ">
              Written in Typescript, React, NextJs and tailwindcss, deployed
              with{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={70}
                height={70}
                className="inline-block ml-1 mr-1 "
              />
              . Created by{" "}
              <span className="font-semibold">Akarshan Mishra.</span>
            </div>
          </SpotlightCard>
        </Spotlight>
      </main>
    </>
  );
}
