import { cachedClient } from "@/sanity/lib/client";
import { postsQuery, paginatedPostsQuery } from "@/sanity/lib/queries";
import BlogNavbar from "@/components/BlogNavbar";
import BlogRecentCard from "@/components/BlogRecentCard";
import BlogCards from "@/components/BlogCards";
import Link from "next/link";
// searchParams is the query string from the URL
export default async function Home({ searchParams }: { searchParams: any }) {
  const posts = await cachedClient(postsQuery);
  const [firstPost, ...rest] = posts;

  const totalData: number = posts.length;
  const dataPerPage: number = 2;
  const totalPages: number = Math.ceil(totalData / dataPerPage);
  const currentPage: number = searchParams.page
    ? parseInt(searchParams.page)
    : 1;
  const offset: number = (currentPage - 1) * dataPerPage;
  const paginatedPosts = await cachedClient(
    paginatedPostsQuery(dataPerPage, offset)
  );

  let pageNumbers: number[] = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i < 1) continue;

    if (i > totalPages) break;

    pageNumbers.push(i);
  }
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

        <BlogCards posts={paginatedPosts} />

        <div className="flex justify-center">
          {currentPage - 1 >= 1 && (
            <>
              <Link href="/blog">{"<<"}</Link>
            </>
          )}

          {pageNumbers.map((number) => (
            <Link key={number} href={`/blog?page=${number}`}>
              <p
                className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded-md ${
                  number == currentPage ? "text-red-500" : ""
                }`}
              >
                {number}
              </p>
            </Link>
          ))}

          {currentPage + 1 <= totalPages && (
            <>
              <Link href="/blog">{">>"}</Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
