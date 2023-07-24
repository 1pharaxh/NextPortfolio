import { postPathQuery } from "@/sanity/lib/queries";

export default async function sitemap() {
  const baseUrl = "https://akarshan.vercel.app";
  const posts = await postPathQuery();
  //   posts is an array like [ { slug: 'test-blog-post', publishedAt: '2023-07-18T05:15:00.000Z' } ]
  const postURLs = posts.map((post: { slug: string; publishedAt: string }) => {
    return {
      url: `${baseUrl}/post/${post.slug}`,
      lastModified: new Date(post.publishedAt).toISOString(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    ...postURLs,
  ];
}
