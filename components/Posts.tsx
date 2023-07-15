import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { cn } from "@/lib/utils";
const builder = imageUrlBuilder(client);
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}
export default function Posts({
  posts = [],
  className,
  firstPost,
}: {
  posts: SanityDocument[];
  className?: string;
  firstPost?: SanityDocument;
}) {
  const title = posts.length === 1 ? `1` : `${posts.length}`;
  return (
    <div
      className={cn("min-h-screen container mx-auto max-w-4xl px-5", className)}
    >
      <main className=" grid grid-cols-1 gap-16 divide-blue-100 divide-y">
        <section className="my-5 flex flex-col justify-items-center md:flex-row md:justify-between ">
          <div className="flex flex-col gap-0">
            {/* Changeable - Color and Text */}
            <Link
              className="text-5xl font-bold leading-tight tracking-tighter hover:underline md:text-6xl"
              href="/blog"
            >
              My |{" "}
              <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text font-bold text-transparent">
                Blog
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
            Welcome to my blog. Here you can expect to find posts about tech,
            design, side projects, AI and everything inbetween.
          </h4>
        </section>

        <div className="flex flex-col pt-16">
          <div className="border border-accent-5/10  brightness-95 hover:brightness-100 transition dark:border-accent-4/25 rounded-xl mb-8 md:mb-16">
            <div className="sm:mx-0">
              <Link
                aria-label={`Read ${firstPost?.title}`}
                href={`/blogpost/${firstPost?.slug.current}`}
              >
                <p className="absolute z-10 m-2 w-max rounded-md bg-slate-300 py-2 px-4 text-lg text-slate-900 lg:text-2xl">
                  Latest blog!
                </p>
                <div className="relative">
                  <Image
                    alt={firstPost?.mainImage?.alt}
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
                          .image(firstPost?.author?.image)
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
                      {
                        firstPost?.categories?.map(
                          (category: SanityDocument) => (
                            <p
                              key={category._id}
                              style={{
                                color: category.color,
                                borderColor: category.color,
                              }}
                              className={`text-sm  font-semibold rounded-lg border p-2`}
                            >
                              {category.title}
                            </p>
                          )
                        ) /* Changeable - Category */
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
            <div>
              <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
                <Link
                  className="hover:underline decoration-blue-500"
                  href={`/blogpost/${firstPost?.slug.current}`}
                >
                  {firstPost?.title}
                </Link>
              </h3>
              <div className="mb-4 text-xs md:mb-0">
                {formatDate(firstPost?.publishedAt)}{" "}
              </div>
            </div>
            <div className="md:border-t md:pt-4 ">
              <p className="mb-4 text-lg leading-relaxed">
                {firstPost?.description}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-8 pt-16  text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
            Older Posts - {title}
          </h2>
          <div className="mb-32 grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-32">
            {posts.map((post: SanityDocument) => (
              <div key={post._id} className=" flex flex-col">
                {post?.mainImage ? (
                  <div className="mb-5 brightness-75 hover:brightness-100 transition relative">
                    <Image
                      className="w-full rounded-lg"
                      src={builder
                        .image(post.mainImage)
                        .width(364)
                        .height(220)
                        .url()}
                      width={364}
                      height={220}
                      alt={post?.mainImage?.alt}
                    />
                    <div
                      className="absolute bottom-0 w-full bg-black 
                    bg-opacity-20 backdrop-blur-lg  drop-shadow-lg
                  p-2 flex justify-between rounded-xl items-center
                "
                    >
                      <span className="font-semibold text-slate-200 text-sm flex flex-col gap-1">
                        <Image
                          src={builder
                            .image(post.author.image)
                            .width(200)
                            .height(200)
                            .url()}
                          width={28}
                          height={28}
                          alt={post.author.name}
                          className="rounded-full"
                        />
                        {post.author.name}
                      </span>
                      <div className="flex gap-2">
                        {
                          post.categories?.map((category: SanityDocument) => (
                            <p
                              key={category._id}
                              style={{
                                color: category.color,
                                borderColor: category.color,
                              }}
                              className={`text-sm  font-semibold rounded-lg border p-2`}
                            >
                              {category.title}
                            </p>
                          )) /* Changeable - Category */
                        }
                      </div>
                    </div>
                  </div>
                ) : null}
                <h2 className="mb-3 text-3xl leading-snug">
                  <Link
                    className="hover:underline decoration-blue-500"
                    href={`blogpost/${post.slug.current}`}
                  >
                    {post.title}{" "}
                  </Link>
                </h2>

                <div className="mb-4 text-xs opacity-80 ">
                  {formatDate(post.publishedAt)}
                </div>
                <p className="text-md mb-4 leading-relaxed opacity-95 line-clamp-2">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
