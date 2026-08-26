import MovieSearch from "@/components/MovieSearch";
import type { Movie } from "@/types/movie";
import { client } from "@/sanity/lib/client";
import { moviesQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const movies = await client.fetch<Movie[]>(moviesQuery);

  return (
    <main className="p-8">
      <h1 className="mb-6 text-4xl font-bold">
        Movie Inventory
      </h1>

      <MovieSearch movies={movies} />
    </main>
  );
}