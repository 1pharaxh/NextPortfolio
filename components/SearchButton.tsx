"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import MenuModal from "./MenuModal";

export default function SearchButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Hook to check if user has scrolled down
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="absolute z-[999] min-w-[calc(100%-2rem)] md:min-w-[calc(100%-4rem)]  
        lg:min-w-[calc(100%-16rem)]  
      translate-y-[-100%] top-1/3
      "
      >
        <MenuModal
          className="dark"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      {/* MAKE THIS DIV COVER THE WHOLE PAGE  */}
      <div
        className={`${
          modalOpen
            ? `visible z-[200] blur-md fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg `
            : `hidden`
        }}`}
        onClick={() => setModalOpen(false)}
      ></div>
      {/* TOOL TIP */}
      {modalOpen ? (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed top-0 left-0 w-full h-full transition-all text-7xl"
        ></div>
      ) : null}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="dark" asChild>
            <button
              onClick={() => {
                setModalOpen(true);
                // scroll to top with behavior smooth
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className={`searchBTN group fixed bottom-9 right-9 -m-2 flex aspect-square 
      h-14 items-center justify-center rounded-full border border-green-900/40 
      bg-green-900/30 text-green-200 shadow-xl shadow-black/50 backdrop-blur 
      transition-all hover:border-green-500 hover:bg-green-700 hover:text-slate-0 z-[100]
      sm:bottom-12 sm:right-12 sm:h-16
       ${modalOpen ? `blur-lg` : ``}
      `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-square h-5 sm:h-6"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="dark">
            <p>Search and Command</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div
        className={
          hasScrolled || modalOpen ? `hidden transition-all` : `scroll-downs `
        }
      >
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </>
  );
}
