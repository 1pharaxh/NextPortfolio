"use client";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { isMobile } from "react-device-detect";
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

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  tilt?: boolean;
};
export default function SpotlightCard({
  children,
  className = "",
  gradient,
  tilt = true,
}: SpotlightCardProps) {
  if (isMobile && /iPhone/.test(navigator.userAgent)) {
    return (
      <div
        className={cn(
          `relative h-full bg-slate-800 rounded-3xl p-px `,
          className
        )}
      >
        <div
          className={cn(
            `relative h-full bg-slate-900 rounded-[inherit] z-[15] overflow-hidden`,
            className
          )}
        >
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 
          pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return tilt ? (
      <Tilt options={defaultOptions}>
        <div
          className={cn(
            `relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 
          before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 
          before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
          before:translate-y-[var(--mouse-y)] before:group-hover/card:opacity-100 before:z-10 before:blur-[100px] 
          after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-200 after:rounded-full 
          after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 
          after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 
          after:z-30 after:blur-[100px] overflow-hidden `,
            className
          )}
        >
          <div
            className={cn(
              `relative h-full bg-slate-900 rounded-[inherit] z-[15] overflow-hidden`,
              className
            )}
          >
            {gradient && (
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 
                pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
            )}
            {children}
          </div>
        </div>
      </Tilt>
    ) : (
      <div
        className={cn(
          `relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 
      before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 
      before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
      before:translate-y-[var(--mouse-y)] before:group-hover/card:opacity-100 before:z-10 before:blur-[100px] 
      after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-200 after:rounded-full 
      after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 
      after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 
      after:z-30 after:blur-[100px] overflow-hidden `,
          className
        )}
      >
        <div
          className={cn(
            `relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden`,
            className
          )}
        >
          {gradient && (
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 
            pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
            </div>
          )}

          {children}
        </div>
      </div>
    );
  }
}

// after:bg-indigo-200 this is the color of the spotlight
// before:bg-slate-100 this is the color of the border with hover
// bg-slate-800 this is the color of border without hover
