import Link from "next/link";
import MarqueeTextBlog from "./MarqueeTextBlog";
import { cn } from "@/lib/utils";

export default function HomeBlogMarqueeText({
  className,
  textLeading,
  textEnd,
}: {
  className?: string;
  textLeading?: string;
  textEnd?: string;
}) {
  return (
    <Link
      href="/blog"
      className={cn(
        `cursor-pointer h-full flex-col rounded overflow-hidden w-full `,
        className
      )}
    >
      <MarqueeTextBlog
        className="rotate-1 md:rotate-0 transition-all duration-500 ease-in-out"
        secondClassName="bg-white/5"
        textLeading={textLeading ? textLeading : "Click here to"}
        textEnd={textEnd ? textEnd : "Read my blog"}
      />
    </Link>
  );
}
