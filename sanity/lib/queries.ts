import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, slug, mainImage, publishedAt, description, author->{_id,name, image, bio}, categories[]->{_id, title, "color":color.hex}
  }`;

export const paginatedPostsQuery = (
  startIndex: number,
  endIndex: number,
  publishedAt: string
) => groq`*[_type == "post" && defined(slug.current) && publishedAt < "${publishedAt}"] | order(publishedAt desc) [${startIndex}...${
  startIndex + endIndex
}] {
    _id, title, slug, mainImage, publishedAt, description, author->{_id,name, image, bio}, categories[]->{_id, title, "color":color.hex}
}`;
// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, categories[]->{_id, title, "color":color.hex}, author->{_id,name, image, bio}, 
    body, publishedAt, metadata, description
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
