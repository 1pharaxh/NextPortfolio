import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1` : `${posts.length}`;
  console.log(posts);

  return (
    <div className="min-h-screen min-w-[100vw] mt-10">
      <main className="container mx-auto grid grid-cols-1 divide-y gap-16 divide-blue-100">
        <div className="flex justify-start items-start  min-[897px]:justify-between  min-[897px]:items-center flex-col  min-[897px]:flex-row">
          <div className="flex flex-col gap-0">
            {/* Changeable - Color and Text */}
            <h1 className="text-4xl min-[897px]:text-5xl p-4 pl-0 leading-10 font-bold">
              Akarshan's |{" "}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`blogpost/${post.slug.current}`}
              className="p-4 hover:bg-blue-50"
            >
              <h2>{post.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
