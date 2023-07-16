import { builder } from "@/sanity/lib/builder";
import { formatDate } from "@/sanity/lib/formatDate";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default function BlogCards({
  posts,
  className,
  numPosts,
}: {
  posts: SanityDocument[];
  className?: string;
  numPosts: number;
}): JSX.Element {
  const title = numPosts === 1 ? `1` : `${numPosts}`;

  return (
    <div className={className}>
      <h2 className="mb-8 pt-16  text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Older Posts - {title}
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-32">
        {posts.map((post: SanityDocument) => (
          <div key={post._id} className=" flex flex-col">
            {post?.mainImage ? (
              <Link
                aria-label={`Read ${post?.title}`}
                href={`/blogpost/${post?.slug.current}`}
              >
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
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-lg  drop-shadow-lg p-2 flex justify-between rounded-xl items-center">
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
                      {post.categories?.map((category: SanityDocument) => (
                        <p
                          key={category._id}
                          style={{
                            color: category.color,
                            borderColor: category.color,
                          }}
                          className={`text-sm  font-semibold rounded-lg border p-2 line-clamp-2`}
                        >
                          {category.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
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
  );
}
