import { cachedClient } from "@/sanity/lib/client";
import { postsQuery, paginatedPostsQuery } from "@/sanity/lib/queries";
import BlogNavbar from "@/components/BlogNavbar";
import BlogRecentCard from "@/components/BlogRecentCard";
import BlogCards from "@/components/BlogCards";
import Link from "next/link";
import BlogFooter from "@/components/BlogFooter";
// searchParams is the query string from the URL
export default async function Home({ searchParams }: { searchParams: any }) {
  const posts = await cachedClient(postsQuery);
  const [firstPost, ...rest] = posts;

  const totalData: number = posts.length;
  const dataPerPage: number = 6;
  const totalPages: number = Math.ceil(totalData / dataPerPage);
  const currentPage: number =
    searchParams.page && parseInt(searchParams.page) > 1
      ? parseInt(searchParams.page)
      : 1;
  const offset: number = (currentPage - 1) * dataPerPage;
  const paginatedPosts = await cachedClient(
    paginatedPostsQuery(offset, dataPerPage)
  );

  let pageNumbers: number[] = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i < 1) continue;

    if (i > totalPages) break;

    pageNumbers.push(i);
  }
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto max-w-4xl px-5">
        <div className=" grid grid-cols-1 gap-16 divide-blue-100 divide-y">
          <BlogNavbar
            firstTitle="My"
            lastTitle="Blog"
            blogDescription="Welcome to my blog. Here you can expect to find posts about tech,
        design, side projects, AI and everything inbetween."
          />

          <BlogRecentCard firstPost={firstPost} />
          <div>
            <BlogCards posts={paginatedPosts} />
            <div className="flex justify-center items-center">
              {currentPage - 1 >= 1 && (
                <>
                  <Link href="/blog" className="hover:underline mr-2">
                    First
                  </Link>
                </>
              )}

              {pageNumbers.map((number) => (
                <Link key={number} href={`/blog?page=${number}`}>
                  <p
                    className={`mx-2 px-4 py-2 bg-transparent rounded-md text-white ${
                      number == currentPage ? "font-bold border-2" : "border"
                    }`}
                  >
                    {number}
                  </p>
                </Link>
              ))}

              {currentPage + 1 <= totalPages && (
                <>
                  <Link
                    className="hover:underline ml-2"
                    href={`/blog?page=${totalPages}`}
                  >
                    Last
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <BlogFooter
        email="akarshan@ualberta.ca"
        bottomHeader="Made with ❤️ by"
        bottomLink="Akarshan Mishra"
        bottomHref="https://akarshan.vercel.app/"
      />
    </main>
  );
}
