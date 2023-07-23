import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
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
      name: "linkedin",
      type: "url",
      title: "LinkedIn",
      description: "LinkedIn URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "github",
      type: "url",
      title: "Github",
      description: "Github Profile URL",
      validation: (Rule) => Rule.required(),
    }),
    // give rich text but only with italics and bold
    defineField({
      name: "about",
      title: "About Yourself",
      type: "blockContentAbout",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resumeFile",
      title: "Resume File",
      validation: (Rule) => Rule.required(),
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "experience",
      title: "Experience",
      description: "Add your Work experience",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            { name: "companyName", type: "string", title: "Company Name" },
            { name: "jobTitle", type: "string", title: "Job Title" },
            { name: "startDate", type: "string", title: "Start Date" },
            { name: "endDate", type: "string", title: "Start Date" },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "codeblockText",
      title: "Code Block Text",
      description: "Add your code block text",
      type: "string",
    }),
  ],
});
