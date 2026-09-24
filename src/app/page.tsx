import MovieSearch from "@/components/MovieSearch";
import type { Movie } from "@/types/movie";
import { client } from "@/sanity/lib/client";
import { moviesQuery } from "@/sanity/lib/queries";
import AddMovieButton from "@/components/AddMovieButton";

export default async function Home() {
  const movies = await client.fetch<Movie[]>(moviesQuery);

  return (
    <main className="mx-auto w-full max-w-5xl p-8">
      <h1 className="text-4xl font-bold">
  Movies
</h1>
<AddMovieButton/>
      <MovieSearch movies={movies} />
    </main>
  );
}