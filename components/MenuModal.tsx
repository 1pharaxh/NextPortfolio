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
            <CommandItem>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </CommandItem>
            <CommandItem>
              <Globe className="mr-2 h-4 w-4" />
              <span>Work Experience</span>
            </CommandItem>
            <CommandItem>
              <Code className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem>
              <Instagram className="mr-2 h-4 w-4" />
              <span>@1akarshan_</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
