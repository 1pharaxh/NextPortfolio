import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { Tilt } from "react-tilt";

interface SocialsCardProps {
  // define the props for the SocialsCard component here
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      SocialsCard: SocialsCardProps;
    }
  }
}

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function SocialsCard({ className = "" }: SocialsCardProps) {
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
    <Tilt options={defaultOptions}>
      <div
        className={
          "h-48 md:h-48 rounded-3xl border flex flex-row items-center transition-colors border-neutral-700 overflow-hidden " +
          className
        }
      >
        <div className="h-full w-2/4 hover:w-3/4 bg-black flex flex-col justify-center items-center rounded-tl-3xl rounded-bl-3xl cursor-pointer transition-all duration-300 group">
          <div className="group-hover:opacity-0 group-hover:h-0 transition-all duration-300 justify-center flex flex-col gap-3 h-full w-full">
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
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-auto">
            <GitHubCalendar
              loading={false}
              year={2023}
              transformData={selectLastHalfYear}
              hideTotalCount={true}
              username="1pharaxh"
            />
          </div>
        </div>

        <div className="group h-full px-2 w-2/4 group-hover:w-3/4 bg-blue-700 flex flex-col gap-3 justify-center rounded-tr-3xl rounded-br-3xl cursor-pointer transition-all duration-300">
          <Image
            className="h-[100px] md:h-[70px] group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out z-10"
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
    </Tilt>
  );
}
