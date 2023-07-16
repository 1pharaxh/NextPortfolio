import { cachedClient } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Post({ params: { slug } }: Props) {
  const post = await cachedClient<SanityDocument>(postQuery, { slug });
  const text = JSON.stringify(post, null, 2);
  return <div className="min-w-[100vw] min-h-screen">{text}</div>;
}
