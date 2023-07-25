import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Home Page - Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    { name: "githubLink", type: "url", title: "Github Link" },
    { name: "projectLink", type: "url", title: "Project Link" },
    {
      name: "description",
      validation: (Rule) => Rule.required(),
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "techStack",
      validation: (Rule) => Rule.required(),
      description: "Select all that apply",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "React", value: "react" },
              { title: "TypeScript", value: "typescript" },
              { title: "NextJs", value: "nextjs" },
              { title: "Express", value: "express" },
              { title: "Flutter", value: "flutter" },
              { title: "Tailwind", value: "tailwind" },
              { title: "Tensorflow", value: "tensorflow" },
              { title: "Git", value: "git" },
              { title: "Node.js", value: "nodejs" },
              { title: "MongoDB", value: "mongodb" },
              { title: "Java", value: "java" },
              { title: "Gradle", value: "gradle" },
              { title: "Github", value: "github_logo" },
              { title: "VSCode", value: "vscode" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "JavaScript", value: "javascript" },
              { title: "Python", value: "python" },
              { title: "C++", value: "cpp" },
              { title: "Figma", value: "figma" },
              { title: "Vite", value: "vite" },
              { title: "GCP", value: "gcp" },
              { title: "Firebase", value: "firebase" },
              { title: "Android Studio", value: "androidstudio" },
              { title: "MySQL", value: "mysql" },
            ],
          },
        },
      ],
    },
    {
      name: "objClass",
      title: "Object Class",
      validation: (Rule) => Rule.required(),
      type: "string",
      options: {
        list: [
          { title: "Object Contain", value: "object-contain" },
          { title: "Object Cover", value: "object-cover" },
        ],
      },
      description:
        "This is used to set the TailWind class on the Project Image.",
    },
    {
      name: "imageLink",
      type: "url",
      title: "Image Link",
      validation: (Rule) => Rule.required(),
    },
  ],
});
