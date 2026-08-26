import { client } from "@/sanity/lib/client";
import { movieBySlugQuery } from "@/sanity/lib/queries";
import type { Movie } from "@/types/movie";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MoviePage({ params }: Props) {
  const { slug } = await params;

  const movie = await client.fetch<Movie | null>( //Movie | null as to narrow the types to either movie or null
    movieBySlugQuery,
    { slug }
  );

  if (!movie) {
    return (
      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Movie not found
        </h1>
      </main>
    );
  }

  const releaseDate = new Date(movie.releaseDate);

  const formattedReleaseDate = releaseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
  <main className="mx-auto max-w-5xl p-8">
    <div className="grid gap-8 md:grid-cols-[300px_1fr]">
      <Image
        src={movie.poster}
        alt={`Poster for ${movie.title}`}
        width={300}
        height={450}
        className="h-auto w-full rounded-lg object-cover"
      />

      <div>
        <h1 className="text-4xl font-bold">
          {movie.title}
        </h1>

        <p className="mt-2 text-gray-600">
          Directed by {movie.director}
        </p>

        <div className="mt-6 space-y-2">
          <p>
            <strong>Rating:</strong> {movie.rating}
          </p>

          <p>
            <strong>Budget:</strong>{" "}
            ${movie.budget.toLocaleString()}
          </p>

          <p>
            <strong>Release:</strong> {formattedReleaseDate}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">
            Description
          </h2>

          <p className="mt-2 leading-7 text-gray-700">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  </main>
);
}