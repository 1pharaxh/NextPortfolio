import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1` : `${posts.length}`;
  return (
    <div className="min-h-screen max-w-[100vw] mt-10">
      <main className="max-w-5xl mx-auto grid grid-cols-1 divide-y gap-16 divide-blue-100">
        <div className="flex justify-start items-start  min-[897px]:justify-between  min-[897px]:items-center flex-col  min-[897px]:flex-row">
          <div className="flex flex-col gap-0">
            {/* Changeable - Color and Text */}
            <h1 className="text-4xl min-[897px]:text-5xl p-4 pl-0 leading-10 font-bold">
              My |{" "}
              <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text font-bold text-transparent">
                Blog
              </span>
            </h1>
            {/* Changeable - Hightlight, HighlightColor and Text */}
            <p className="text-base -mt-3 min-[897px]:text-lg font-normal">
              Every{" "}
              <span className="underline decoration-blue-500">Developers</span>{" "}
              Journey is unique. Here's mine.{" "}
            </p>
          </div>
          {/* Changeable - Text */}
          <h1 className="min-[897px]:mt-0 mt-4 min-[897px]:max-w-[390px] text-lg text-slate-300 min-[897px]:text-xl">
            Welcome to my blog. Here you can expect to find posts about tech,
            design, side projects, AI and everything inbetween.
          </h1>
        </div>
        <div className="mb-32 pt-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
          {posts.map((post) => (
            <div key={post._id} className=" flex flex-col">
              {post?.mainImage ? (
                <div className="mb-5 brightness-75 hover:brightness-100 transition">
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

              <div className="mb-4 text-xs opacity-80 ">March 3, 2023</div>
              <p className="text-md mb-4 leading-relaxed opacity-95">
                I ran into a big problem with passwords. Here’s how I solved it.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
