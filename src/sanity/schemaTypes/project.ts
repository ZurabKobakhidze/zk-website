import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "tags", type: "array", title: "Tags", of: [{ type: "string" }] }),
    defineField({ name: "url", type: "url", title: "Live URL" }),
    defineField({ name: "github", type: "url", title: "GitHub URL" }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
  ],
});
