import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className="min-h-screen min-w-[100vw]">
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        <h1 className="text-2xl p-4 font-bold">{title}</h1>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`blogpost/${post.slug.current}`}
            className="p-4 hover:bg-blue-50"
          >
            <h2>{post.title}</h2>
          </Link>
        ))}
      </main>
    </div>
  );
}
