import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: "Block Content",
  name: "blockContentAbout",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [{ title: "Normal", value: "normal" }],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [{ title: "Magic Text / Underline", value: "underline" }],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [],
      },
    }),
    // defineArrayMember({
    //   type: "image",
    //   options: { hotspot: true },
    //   fields: [
    //     {
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative Text",
    //     },
    //   ],
    // }),
  ],
});
