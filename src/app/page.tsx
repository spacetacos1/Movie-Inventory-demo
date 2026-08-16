import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/movies";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-4xl font-bold">
        Movie Inventory
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}