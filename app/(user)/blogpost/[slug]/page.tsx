import { cachedClient } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Post({ params: { slug } }: Props) {
  // const posts = await cachedClient<SanityDocument>(postQuery, { slug });
  // console.log(posts);
  return <div className="min-w-[100vw] min-h-screen">Post : {slug}</div>;
}
