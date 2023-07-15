import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogNavbar from "@/components/BlogNavbar";
import BlogRecentCard from "@/components/BlogRecentCard";
import BlogCards from "@/components/BlogCards";
export default async function Home() {
  const posts = await cachedClient(postsQuery);
  const [firstPost, ...rest] = posts;

  return (
    <main className="min-h-screen container mx-auto max-w-4xl px-5">
      <div className=" grid grid-cols-1 gap-16 divide-blue-100 divide-y">
        <BlogNavbar
          firstTitle="My"
          lastTitle="Blog"
          blogDescription="Welcome to my blog. Here you can expect to find posts about tech,
        design, side projects, AI and everything inbetween."
        />

        <BlogRecentCard firstPost={firstPost} />

        <BlogCards posts={rest} />
      </div>
    </main>
  );
}
