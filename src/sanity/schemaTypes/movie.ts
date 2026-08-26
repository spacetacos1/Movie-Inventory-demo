import { defineType, defineField } from "sanity";

export const movieType = defineType({
  name: "movie",
  title: "Movie",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "director",
      title: "director",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: [
          { title: "G", value: "G" },
          { title: "PG", value: "PG" },
          { title: "PG-13", value: "PG-13" },
          { title: "R", value: "R" },
          { title: "NC-17", value: "NC" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});