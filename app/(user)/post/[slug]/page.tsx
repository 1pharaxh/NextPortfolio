import BlogFooter from "@/components/BlogFooter";
import BlogNavbar from "@/components/BlogNavbar";
import SearchButton from "@/components/SearchButton";
import { builder } from "@/sanity/lib/builder";
import { cachedClient } from "@/sanity/lib/client";
import { getMetaData, getTopTwo, postQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";
import { getImageDimensions } from "@sanity/asset-utils";
import Head from "next/head";
import BreadCrumbs from "@/components/BreadCrumbs";
import { formatDate } from "@/sanity/lib/formatDate";
import BlogCards from "@/components/BlogCards";
type Props = {
  params: {
    slug: string;
  };
};

// Barebones lazy-loaded image component
const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      alt={value?.alt || " Main blog image "}
      src={builder.image(value).width(800).height(500).url()}
      width={800}
      height={500}
      className="h-auto w-full rounded-xl shadow-xl text-transparent"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const SampleCodeComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  return (
    <CodeBlock
      code={value.code}
      filename={value.filename}
      language={value.language}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    code: SampleCodeComponent,

    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await cachedClient<SanityDocument>(getMetaData, { slug });
  return {
    title: post?.metadata,
    description: post?.description,
    creator: "Akarshan Mishra",
    keywords: ["Leetcode", "Coding Interview", "Software Development"],
    openGraph: {
      title: post?.metadata,
      description: post?.description,
      siteName: "Akarshan Mishra's Blog",
      locale: "en_US",
      type: "website",
      authors: ["Akarshan Mishra", "Akarshan"],
      images: [
        {
          url: builder
            .image(post?.mainImage)
            .width(800)
            .height(500)
            .url() as string,
          width: 800,
          height: 500,
          alt: post?.mainImage?.alt || " Main blog image ",
        },
      ],
    },
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await cachedClient<SanityDocument>(postQuery, { slug });
  let topTwo = await cachedClient(getTopTwo(post?._id));

  return (
    <main className="flex flex-col items-center justify-center">
      <SearchButton />
      <div className="min-h-screen container mx-auto max-w-4xl px-5">
        <div className=" grid grid-cols-1 gap-4 md:gap-16 divide-blue-100 divide-y">
          <BlogNavbar
            firstTitle="Akarshan's"
            lastTitle="Blog"
            blogDescription=""
          />
          <div className="pt-4 md:pt-16">
            <BreadCrumbs className="mb-4" />

            <h1 className="mb-12 text-left text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl md:leading-none">
              <span className="bg-gradient-to-br from-indigo-200 to-indigo-500 bg-clip-text font-bold text-transparent">
                {post.title}
              </span>
            </h1>

            {/* IMAGE  */}

            <div className=" mx-auto max-w-2xl flex flex-col gap-5 sm:gap-8 sm:mb-0 mb-10">
              <div className=" w-full px-0 sm:px-5 flex justify-between items-center">
                <div className="flex flex-col gap-1 sm:gap-3">
                  <span className="font-semibold text-slate-200 text-base sm:text-lg flex flex-col sm:flex-row sm:items-center gap-2">
                    <Image
                      src={builder
                        .image(post?.author?.image || " Author image")
                        .width(200)
                        .height(200)
                        .url()}
                      width={32}
                      height={32}
                      alt={post?.author?.name}
                      className="rounded-full"
                    />
                    {post?.author?.name}
                  </span>
                  <div className="hidden sm:block text-base">
                    {formatDate(post?.publishedAt)}
                  </div>
                </div>
                <div className="flex gap-2">
                  {post?.categories?.map(
                    (category: SanityDocument, index: number) => (
                      <p
                        key={index}
                        style={{
                          color: category.color,
                          borderColor: category.color,
                        }}
                        className={`text-sm  font-semibold rounded-lg border p-2`}
                      >
                        {category.title}
                      </p>
                    )
                  )}
                </div>
              </div>

              <Image
                alt={post?.mainImage?.alt || " Main blog image "}
                src={builder
                  .image(post?.mainImage)
                  .width(800)
                  .height(500)
                  .url()}
                width={800}
                height={500}
                className="h-auto w-full rounded-xl shadow-xl text-transparent"
              />
              <div className="block sm:hidden text-base">
                {formatDate(post?.publishedAt)}
              </div>
              <div className="px-0 sm:px-5 text-base prose sm:prose-lg md:prose-xl prose-invert">
                <blockquote
                  className="text-base font-semibold italic tracking-normal sm:tracking-widest leading-loose
                hover:text-gray-400 transition ease-in-out duration-200 cursor-pointer
                "
                >
                  {post?.description}
                </blockquote>
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <article
            className="pt-4 md:pt-16 mx-auto w-full
          prose sm:prose-lg md:prose-xl prose-invert
          prose-h1:bg-gradient-to-br prose-h1:from-green-200 prose-h1:to-green-500 prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:my-0 
          prose-h2:bg-gradient-to-br prose-h2:from-red-200 prose-h2:to-red-500 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:my-0 
          prose-h3:bg-gradient-to-br prose-h3:from-amber-200 prose-h3:to-amber-500 prose-h3:bg-clip-text prose-h3:text-transparent prose-h3:my-0 
          prose-h4:bg-gradient-to-br prose-h4:from-fuchsia-200 prose-h4:to-fuchsia-500 prose-h4:bg-clip-text prose-h4:text-transparent prose-h4:my-0
         prose-blockquote:mt-0 prose-blockquote:mb-0 prose-blockquote:pt-0 prose-blockquote:pb-0  prose-blockquote:my-0 prose-blockquote:py-0
         prose-li:mt-0 prose-li:mb-0 prose-li:pt-0 prose-li:pb-0 prose-li:my-0 prose-li:py-0
          "
          >
            {post?.body ? (
              <PortableText value={post.body} components={components} />
            ) : null}
          </article>
          {/* FOOTER */}
          <BlogCards
            className="pt-8 sm:pt-16"
            numPosts="Latest Posts"
            posts={topTwo}
          />
          <BlogFooter
            email="akarshan@ualberta.ca"
            bottomHeader="Made with ❤️ by"
            bottomLink="Akarshan Mishra"
            bottomHref="https://akarshan.vercel.app/"
          />{" "}
        </div>
      </div>
    </main>
  );
}
