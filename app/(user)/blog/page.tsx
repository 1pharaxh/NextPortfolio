// ./nextjs-app/app/pages/index.tsx

import Posts from "@/components/Posts";
import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  // skip the first post and save it in another variable and only take the next
  const posts = await cachedClient(postsQuery);
  const [firstPost, ...rest] = posts;

  return <Posts posts={rest} firstPost={firstPost} />;
}
