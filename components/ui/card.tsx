"use client";
import React, { useRef, useState, useEffect } from "react";
import MousePosition from "@/lib/mouse-position";
import { cn } from "@/lib/utils";
import { isMobile } from "react-device-detect";

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
  if (isMobile && /iPhone/.test(navigator.userAgent)) {
    return <div className={className}>{children}</div>;
  } else {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosition = MousePosition();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);
    useEffect(() => {
      containerRef.current &&
        setBoxes(
          Array.from(containerRef.current.children).map(
            (el) => el as HTMLElement
          )
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
}
