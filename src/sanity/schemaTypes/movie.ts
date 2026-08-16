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
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "director",
      title: "director",
      type: "string",
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
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "number",
    }),
    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
    }),
  ],
});