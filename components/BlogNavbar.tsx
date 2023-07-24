import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const components = {
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => {
      return (
        <span className="px-1 inline-block underline decoration-blue-500">
          {children}
        </span>
      );
    },
  },
};

export default function BlogNavbar({
  className,
  firstTitle,
  lastTitle,
  blogDescription,
  navBarDescription,
}: {
  className?: string;
  firstTitle: string;
  lastTitle: string;
  blogDescription: string;
  navBarDescription: SanityDocument;
}) {
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
        <PortableText value={navBarDescription} components={components} />
        {/* <p className="pt-0 md:pt-2 text-base font-normal">
          Every{" "}
          <span className="underline decoration-blue-500">Developers</span>{" "}
          Journey is unique. Here's mine.{" "}
        </p> */}
      </div>
      <h4 className="mt-5 max-w-full text-left text-lg md:max-w-sm md:pl-8 italic font-semibold">
        {blogDescription}
      </h4>
    </section>
  );
}
