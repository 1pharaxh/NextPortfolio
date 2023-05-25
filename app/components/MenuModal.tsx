import { useState } from "react";

interface MenuModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MenuModal: MenuModalProps;
    }
  }
}

export default function MenuModal({ modalOpen, setModalOpen }: MenuModalProps) {
  const [animationFinished, setAnimationFinished] = useState(true);

  return (
    <div
      onAnimationEnd={() => {
        setAnimationFinished(!animationFinished);
      }}
      style={{
        animation: modalOpen ? "fadeIn 0.5s" : "fadeOut 0.5s",
        animationFillMode: "forwards",
      }}
      className={`${
        modalOpen || !animationFinished ? "visible" : "hidden"
      } w-full fixed z-[15] top-10 left-0  px-4  md:px-16  lg:px-32  `}
    >
      <div
        className={` group rounded-xl  border transition-colors border-neutral-700 bg-neutral-900/70`}
      >
        <input
          className="hover:bg-slate-500 px-6 py-3 h-14 border-b border-slate-700 
          w-full bg-transparent outline-none placeholder:text-slate-500 
          focus-within:placeholder:text-slate-50 hover:placeholder:text-slate-100 rounded-t-xl"
          placeholder="Search for actions and pages..."
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          aria-autocomplete="list"
          role="combobox"
          aria-expanded="true"
          type="text"
        ></input>
        <div
          className="py-2 max-h-[min(calc(100vh-9rem),24rem)]  scroll-py-12"
          cmdk-list=""
          role="listbox"
          aria-label="Suggestions"
          id=":r0:"
          aria-labelledby=":r2:"
        >
          <div>
            <div className="pt-2">
              <div role="group">
                <h2 className=" px-6 pb-2 text-xs text-[0.6875rem] text-slate-400 font-semibold tracking-widest uppercase">
                  Sections
                </h2>

                {/* ROW  */}
                <div
                  onClick={() => {
                    document.getElementById("homeSection")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setModalOpen(false);
                  }}
                  className="hover:bg-slate-500 cursor-pointer px-4 mx-2 py-2  border 
                border-transparent mb-px 
                rounded-lg text-slate-200 text-sm  font-medium 
                "
                >
                  <div className="flex flex-row items-center cursor-pointer rounded-xl ">
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
                      className="-ml-px mr-3 h-4 w-4"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                    Home
                  </div>
                </div>

                {/* ROW  */}
                <div
                  onClick={() => {
                    document.getElementById("ResumeSection")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setModalOpen(false);
                  }}
                  className="hover:bg-slate-500 cursor-pointer px-4 mx-2 py-2  border 
                border-transparent mb-px 
                rounded-lg text-slate-200 text-sm  font-medium 
                "
                >
                  <div className="flex flex-row items-center cursor-pointer rounded-xl ">
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
                      className="-ml-px mr-3 h-4 w-4"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    My Resume
                  </div>
                </div>
                {/* ROW */}
                <div
                  onClick={() => {
                    document.getElementById("ResumeSection")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setModalOpen(false);
                  }}
                  className="hover:bg-slate-500 px-4 mx-2 py-2  border 
                border-transparent mb-px 
                rounded-lg text-slate-200 text-sm  font-medium 
                "
                >
                  <div className="flex flex-row items-center cursor-pointer rounded-xl ">
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
                      className="-ml-px mr-3 h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Work Experience
                  </div>
                </div>
              </div>
              {/* ROW */}
              <div
                onClick={() => {
                  document.getElementById("projectsCards")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setModalOpen(false);
                }}
                className="hover:bg-slate-500 px-4 mx-2 py-2  border 
                border-transparent mb-px 
                rounded-lg text-slate-200 text-sm  font-medium 
                "
              >
                <div className="flex flex-row items-center cursor-pointer rounded-xl ">
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
                    className="-ml-px mr-3 h-4 w-4"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Projects{" "}
                </div>
              </div>
            </div>
            <div
              className="bg-slate-700 h-px w-full my-2"
              cmdk-separator=""
              role="separator"
            ></div>
            <div
              className="pt-2"
              cmdk-group=""
              role="presentation"
              data-value="undefined"
            >
              <div cmdk-group-items="" role="group">
                <h2 className="px-6 pb-2 text-xs text-[0.6875rem] text-slate-400 font-semibold tracking-widest uppercase">
                  Socials
                </h2>
                <div
                  className="hover:bg-slate-500 px-4 mx-2 py-2 aria-selected:bg-slate-0/[0.15] border border-transparent mb-px aria-selected:border-slate-0/5 rounded-lg text-slate-200 text-sm aria-selected:text-slate-0 font-medium aria-disabled:text-slate-500"
                  cmdk-item=""
                  role="option"
                  data-value="twitter"
                  aria-selected="true"
                  data-selected="true"
                >
                  <div className="flex flex-row items-center cursor-pointer rounded-xl ">
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
                      className="-ml-px mr-3 h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Twitter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`  left-0 top-full  w-full flex-row items-center justify-between gap-2 px-3 py-4 text-sm flex`}
      >
        <div className="text-slate-300 flex flex-row gap-2 cursor-pointer">
          <span
            className="flex h-[1.675em] min-w-[1.675em] items-center justify-center 
              rounded-[1em/0.325em] rounded-t bg-slate-500/50 px-[0.5em] pb-[0.075em] 
              text-[0.85em] font-normal font-mono leading-[0.875em] tracking-tighter 
              text-slate-0/80 hover:text-slate-0 hover:bg-slate-500/70 "
          >
            Esc
          </span>
          Close menu
        </div>
        <div className="text-slate-300 flex flex-row gap-2 cursor-pointer">
          <span
            className="flex h-[1.675em] min-w-[1.675em] items-center justify-center 
              rounded-[1em/0.325em] rounded-t bg-slate-500/50 px-[0.5em] pb-[0.075em] 
              text-[0.85em] font-normal font-mono leading-[0.875em] tracking-tighter 
              text-slate-0/80 hover:text-slate-0 hover:bg-slate-500/70 "
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
              className="w-[1em] h-[1em] -mx-[0.075em]"
            >
              <polyline points="9 10 4 15 9 20"></polyline>
              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
            </svg>
          </span>
          Select option
        </div>
      </div>
    </div>
  );
}
