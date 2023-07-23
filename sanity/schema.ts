import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import blockContentAbout from "./schemas/blockContentAbout";
import home from "./schemas/home";
import projects from "./schemas/projects";
import navbarNblogPage from "./schemas/navbarNblogPage";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    projects,
    navbarNblogPage,
    post,
    author,
    category,
    blockContent,
    blockContentAbout,
  ],
};
