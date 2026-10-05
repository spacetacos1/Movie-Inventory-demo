import MovieSearch from "@/components/MovieSearch";
import type { Movie } from "@/types/movie";
import { client } from "@/sanity/lib/client";
import { moviesQuery } from "@/sanity/lib/queries";
import AddMovieButton from "@/components/AddMovieButton";

export default async function Home() {
  const movies = await client.fetch<Movie[]>(moviesQuery);

  return (
    <main className="mx-auto w-full max-w-5xl pl-8 pr-3 pt-2 pb-8">
    <div className="flex items-center justify-between">
      <h1 className="text-4x1 font-bold">
        Movies
      </h1>

      <AddMovieButton/>
    </div>
      <MovieSearch movies={movies} />
    </main>
  );
}