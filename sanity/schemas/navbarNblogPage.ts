import { defineField, defineType } from "sanity";

export default defineType({
  name: "navbarNblogPage",
  title: "Navbar & Blog Page",
  type: "document",
  fields: [
    defineField({
      name: "metadatatitle",
      type: "string",
      description: "Metadata title to help with SEO",
      title: "Metadata Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metadatadescription",
      type: "string",
      description: "Give a short description for home page to help with SEO",
      title: "Metadata Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metadatacreator",
      type: "string",
      description: "Name Creator to help with SEO",
      title: "Metadata Creator",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metadatakeywords",
      type: "array",
      title: "Metadata Keywords",
      of: [{ type: "string" }],
      description: "MetaData keywords to help with SEO",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "metadataImage",
      type: "image",
      title: "Metadata Image",
      description: "Image to help with SEO",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
    }),
    defineField({
      name: "navbar",
      type: "object",
      title: "Navbar",
      fields: [
        { name: "firstTitle", type: "string", title: "First Title" },
        { name: "lastTitle", type: "string", title: "First Title" },
        {
          name: "navbarDescription",
          type: "blockContentAbout",
          title: "Nav Bar Description",
        },
        { name: "blogDescription", type: "string", title: "Blog Description" },
      ],
      validation: (Rule) => Rule.required(),
      description: "Navbar Data",
    }),
  ],
});
