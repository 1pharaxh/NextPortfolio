"use client";
import React, { useRef, useState, useEffect } from "react";
import MousePosition from "@/lib/mouse-position";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";

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

type SpotlightButton = {
  children: React.ReactNode;
  className?: string;
};
export function SpotlightButton({ className, children }: SpotlightButton) {
  return (
    <a
      className={cn(
        `inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150`,
        className
      )}
      href="#0"
    >
      {/* <svg
        className="fill-slate-500 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
      >
        <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
      </svg>
      <span>Connect</span> */}
    </a>
  );
}
type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};
export function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);
  useEffect(() => {
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map((el) => el as HTMLElement)
      );
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);
    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);
  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);
  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };
  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}
type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  tilt?: boolean;
};
export function SpotlightCard({
  children,
  className = "",
  gradient,
  tilt = false,
}: SpotlightCardProps) {
  return tilt ? (
    <Tilt options={defaultOptions}>
      <div
        className={cn(
          `relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 
        before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 
        before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] 
        before:translate-y-[var(--mouse-y)] before:group-hover/card:opacity-100 before:z-10 before:blur-[100px] 
        after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full 
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
          {/* Text */}
          {/* <div className="flex flex-col h-full items-center text-center">
          <div className="grow mb-5">
            <h2 className="text-xl text-slate-200 font-bold mb-1">
              Amazing Integration
            </h2>
            <p className="text-sm text-slate-500">
              Quickly apply filters to refine your issues lists and create
              custom views.
            </p>
          </div>
        </div> */}

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
    after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full 
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
        {/* Text */}
        {/* <div className="flex flex-col h-full items-center text-center">
      <div className="grow mb-5">
        <h2 className="text-xl text-slate-200 font-bold mb-1">
          Amazing Integration
        </h2>
        <p className="text-sm text-slate-500">
          Quickly apply filters to refine your issues lists and create
          custom views.
        </p>
      </div>
    </div> */}

        {children}
      </div>
    </div>
  );
}

// after:bg-indigo-500 this is the color of the spotlight
// before:bg-slate-100 this is the color of the border with hover
// bg-slate-800 this is the color of border without hover
