import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, mainImage, publishedAt, description, author->{name, image, bio}, categories[]->{_id, title}
  }`;

export const paginatedPostsQuery = (
  startIndex: number
) => groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [${startIndex}...${
  startIndex + 8
}] {
  _id, title, slug, mainImage, publishedAt, description, author->{name, image, bio}, categories[]->{_id, title}
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, categories[]->{title}, author->{name, image, bio}, 
    body, publishedAt, metadata, description
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
