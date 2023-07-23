import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { colorInput } from "@sanity/color-input";
import { Box, Boxes } from "lucide-react";

// Define the actions that should be available for singleton documents
const singletonActions = new Set([
  "create",
  "delete",
  "publish",
  "unpublish",
  "update",
]);

// Define the singleton document types
const singletonTypes = new Set(["home", "navbarNblogPage"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    codeInput(),
    colorInput(),

    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton document types
            S.listItem()
              .title("Home Page")
              .child(S.document().schemaType("home"))
              .icon(Box),
            // Regular document types
            S.documentTypeListItem("projects")
              .title("Home Page - Projects")
              .icon(Boxes),
            S.divider(),

            // Singleton document types
            S.listItem()
              .title("Navbar & Blog Page Metadata")
              .child(S.document().schemaType("navbarNblogPage"))
              .icon(Box),

            // Regular document types
            S.documentTypeListItem("post").title("Blog Posts").icon(Boxes),
            S.documentTypeListItem("author").title("Blog Authors").icon(Boxes),
            S.documentTypeListItem("category")
              .title("Blog Categories")
              .icon(Boxes),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
