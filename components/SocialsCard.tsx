"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { Tilt } from "react-tilt";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function SocialsCard({ className }: { className?: string }) {
  const selectLastHalfYear = (
    contributions: Array<Activity>
  ): Array<Activity> => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 2;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <>
      <div
        className={cn(
          `h-48 md:h-48   flex flex-row items-center 
           overflow-hidden`,
          className
        )}
      >
        <div
          onClick={() => window.open("https://github.com/1pharaxh", "_blank")}
          className="h-full w-2/4 hover:w-3/4 bg-black flex flex-col justify-center items-center 
          rounded-tl-3xl rounded-bl-3xl cursor-pointer transition-all duration-300 group/socials-card"
        >
          <div className="group-hover/socials-card:opacity-0 group-hover/socials-card:h-0 transition-all duration-300 justify-center flex flex-col gap-3 h-full w-full">
            <Image
              className="h-[100px] md:h-[70px]"
              src="/github.svg"
              alt="github_logo"
              width="0"
              priority
              height="0"
              sizes="100vw"
              style={{ width: "auto" }}
            />
            <h1 className="opacity-50 text-base md:text-sm lg:text-xl text-center">
              @1pharaxh
            </h1>
          </div>
          <div className="opacity-0 group-hover/socials-card:opacity-100 transition-all duration-300 h-0 group-hover/socials-card:h-auto">
            <GitHubCalendar
              loading={false}
              year={2023}
              transformData={selectLastHalfYear}
              hideTotalCount={true}
              username="1pharaxh"
            />
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/akarsm", "_blank")
          }
          className="group h-full px-2 w-2/4 hover:w-3/4 bg-blue-700 flex flex-col gap-3 justify-center rounded-tr-3xl rounded-br-3xl cursor-pointer transition-all duration-300"
        >
          <Image
            className="h-[100px] md:h-[70px] group-hover/socials-card:rotate-3 group-hover/socials-card:scale-110 transition-all duration-500 ease-in-out z-10"
            src="/linkedin.svg"
            alt="github_logo"
            width="0"
            priority
            height="0"
            sizes="100vw"
            style={{ width: "auto" }}
          />
          <h1 className="opacity-50 text-base md:text-sm lg:text-xl text-center">
            @akarsm
          </h1>
        </div>
      </div>
    </>
  );
}
