import { groq } from "next-sanity";
import { client } from "./client";

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
   _id, title, mainImage, body, categories[]->{_id, title, "color":color.hex}, author->{_id,name, image, bio}, publishedAt, metadata, description
  }`;

// Get all post slugs
export async function postPathQuery() {
  return client.fetch(groq`*[_type == "post" && defined(slug.current)][]{
    "slug": slug.current, publishedAt 
  }`);
}

export const getMetaData = groq`*[_type == "post" && slug.current == $slug][0]{ 
 metadatatitle, metadatakeywords, description, mainImage, "metacreator":author->name
  }`;

export const getTopTwo = (
  excludeId: string
) => groq`*[_type == "post" && defined(slug.current) && _id != "${excludeId}"] | order(publishedAt desc)[0...2]{
  _id, title, slug, mainImage, publishedAt, description, author->{_id,name, image, bio}, categories[]->{_id, title, "color":color.hex}
}`;

export const getHomeData = groq`*[_type == "home"][0]{
  linkedin, github, about, "resumeFile": resumeFile.asset->url, experience, codeblockText
}`;

export const getHomeMetaData = groq`*[_type == "home"][0]{
  metadatatitle, metadatadescription, metadatacreator, metadatakeywords, metadataImage
} `;

export const getBlogMetaData = groq`*[_type == "navbarNblogPage"][0]{
  metadatatitle, metadatadescription, metadatacreator, metadatakeywords, metadataImage, navbar
} `;

export async function getNavbarData() {
  return client.fetch(
    groq`*[_type == "navbarNblogPage"][0]{
  navbar
} `
  );
}

export const getAllProjects = groq`*[_type == "projects"] | order(publishedAt desc){
  _id, title, githubLink, projectLink, description, techStack, imageLink
}`;
