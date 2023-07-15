import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BlogNavbar({
  className,
  firstTitle,
  lastTitle,
  blogDescription,
}: {
  className?: string;
  firstTitle: string;
  lastTitle: string;
  blogDescription: string;
}): JSX.Element {
  return (
    <section
      className={cn(
        "my-5 flex flex-col justify-items-center md:flex-row md:justify-between ",
        className
      )}
    >
      <div className="flex flex-col gap-0">
        {/* Changeable - Color and Text */}
        <Link
          className="text-5xl font-bold leading-tight tracking-tighter hover:underline md:text-6xl"
          href="/blog"
        >
          {firstTitle} |{" "}
          <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text font-bold text-transparent">
            {lastTitle}
          </span>
          {/* Changeable - Hightlight, HighlightColor and Text */}
        </Link>
        <p className="pt-2 text-base font-normal">
          Every{" "}
          <span className="underline decoration-blue-500">Developers</span>{" "}
          Journey is unique. Here's mine.{" "}
        </p>
      </div>
      <h4 className="mt-5 max-w-full text-left text-lg md:max-w-sm md:pl-8">
        {blogDescription}
      </h4>
    </section>
  );
}
