import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface SearchButtonProps {
  // React useState hook to set the modal state define its type
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      SearchButton: SearchButtonProps;
    }
  }
}
export default function SearchButton({
  setModal,
  modalOpen = false,
}: SearchButtonProps) {
  return (
    <>
      {/* TOOL TIP */}
      {modalOpen ? (
        <div
          onClick={() => setModal(false)}
          className="fixed top-0 left-0 w-full h-full z-[12] transition-all text-7xl"
        ></div>
      ) : null}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="dark" asChild>
            <button
              onClick={() => setModal(true)}
              className={`searchBTN group z-10 fixed bottom-9 right-9 -m-2 flex aspect-square 
      h-14 items-center justify-center rounded-full border border-green-900/40 
      bg-green-900/30 text-green-200 shadow-xl shadow-black/50 backdrop-blur 
      transition-all hover:border-green-500 hover:bg-green-700 hover:text-slate-0 
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
    </>
  );
}
