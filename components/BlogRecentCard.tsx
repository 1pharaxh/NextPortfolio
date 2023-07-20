import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { builder } from "@/sanity/lib/builder";
import { formatDate } from "@/sanity/lib/formatDate";
import { cn } from "@/lib/utils";

export default function BlogRecentCard({
  firstPost,
  className,
}: {
  firstPost: SanityDocument;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="border border-accent-5/10  brightness-95 hover:brightness-100 transition dark:border-accent-4/25 rounded-xl mb-8 md:mb-16">
        <div className="sm:mx-0">
          <Link
            aria-label={`Read ${firstPost?.title}`}
            href={`/post/${firstPost?.slug.current}`}
          >
            <p className="absolute z-10 m-2 w-max rounded-md bg-slate-300 py-2 px-4 text-lg text-slate-900 lg:text-2xl">
              Latest blog!
            </p>
            <div className="relative">
              <Image
                alt={firstPost?.mainImage?.alt || " Main blog image "}
                src={builder
                  .image(firstPost?.mainImage)
                  .width(800)
                  .height(500)
                  .url()}
                width={800}
                height={500}
                className="h-auto w-full rounded-xl shadow-xl text-transparent"
              />
              <div
                className="absolute bottom-0 w-full bg-black 
              bg-opacity-20 backdrop-blur-lg  drop-shadow-lg
            p-5 flex justify-between rounded-xl items-center
          "
              >
                <span className="font-semibold text-slate-200 text-base flex flex-col gap-2">
                  <Image
                    src={builder
                      .image(firstPost?.author?.image || " Author image")
                      .width(200)
                      .height(200)
                      .url()}
                    width={32}
                    height={32}
                    alt={firstPost?.author?.name}
                    className="rounded-full"
                  />
                  {firstPost?.author?.name}
                </span>
                <div className="flex gap-2">
                  {firstPost?.categories?.map(
                    (category: SanityDocument, index: number) => (
                      <p
                        key={index}
                        style={{
                          color: category.color,
                          borderColor: category.color,
                        }}
                        className={`text-sm  font-semibold rounded-lg border p-2`}
                      >
                        {category.title}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-8 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link
              className="hover:underline decoration-blue-500 line-clamp-2"
              href={`/post/${firstPost?.slug.current}`}
            >
              {firstPost?.title}
            </Link>
          </h3>
          <div className="mb-4 text-xs md:mb-0">
            {formatDate(firstPost?.publishedAt)}{" "}
          </div>
        </div>
        <div className="md:border-t md:pt-4 ">
          <p className="mb-4 text-lg leading-relaxed line-clamp-2 md:line-clamp-none">
            {firstPost?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
