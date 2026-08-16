import MovieCard from "@/components/MovieCard";
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}