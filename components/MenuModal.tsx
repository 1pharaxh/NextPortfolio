import {
  Globe,
  Home,
  CreditCard,
  Settings,
  Smile,
  User,
  Code,
  Instagram,
  Twitter,
  Newspaper,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface MenuModalProps {
  className?: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuModal({
  className,
  modalOpen,
  setModalOpen,
  ...props
}: MenuModalProps) {
  return (
    <>
      <Command
        className={cn(
          `${
            modalOpen ? "visible" : "hidden"
          } z-[15] rounded-lg border shadow-md h-fit -mb-[10rem]`,
          className
        )}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <div
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                }
                const home = document.getElementById("homeSection");
                home?.scrollIntoView({ behavior: "smooth" });
                setModalOpen(false);
              }}
            >
              <CommandItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </CommandItem>
            </div>
            <div
              onClick={() => {
                // go to / route then scroll to projects
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                }
                const resume = document.getElementById("resumesection");
                resume?.scrollIntoView({ behavior: "smooth" });
                setModalOpen(false);
              }}
            >
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Resume</span>
              </CommandItem>
            </div>
            <div
              onClick={() => {
                window.location.href = "/blog";
              }}
            >
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <span>My Blog</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
            </div>
            <div
              onClick={() => {
                // go to / route then scroll to projects
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                }
                const exp = document.getElementById("workexperiencesection");
                exp?.scrollIntoView({ behavior: "smooth" });
                setModalOpen(false);
              }}
            >
              <CommandItem>
                <Globe className="mr-2 h-4 w-4" />
                <span>Work Experience</span>
              </CommandItem>
            </div>
            <div
              onClick={() => {
                // go to / route then scroll to projects
                if (window.location.pathname !== "/") {
                  window.location.href = "/";
                }
                const projects = document.getElementById("projectssection");
                projects?.scrollIntoView({ behavior: "smooth" });
                setModalOpen(false);
              }}
            >
              <CommandItem>
                <Code className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
            </div>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <div
              onClick={() => {
                window.location.href = "https://www.instagram.com/1akarshan_/";
              }}
            >
              <CommandItem>
                <Instagram className="mr-2 h-4 w-4" />
                <span>@1akarshan_</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </div>
            <div
            // onClick={() => {
            //   alert("Twitter");
            // }}
            >
              <CommandItem>
                <Twitter className="mr-2 h-4 w-4" />
                <span>Twitter</span>
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
