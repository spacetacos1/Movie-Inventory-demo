import MovieCard from "@/components/MovieCard";
import type { Movie } from "@/types/movie";

export default function Home() {
  const movies: Movie[] = [ //movies is the name of the array
    {
      title: "The Matrix",
      year: 1999,
      genre: "Science Fiction",
    },
    {
      title: "Jurassic Park",
      year: 1993,
      genre: "Adventure",
    },
    {
      title: "Alien",
      year: 1979,
      genre: "Horror",
    },
  ];

  return (
    <main className="p-8">
      <h1 className="mb-6 text-4xl font-bold">
        Movie Inventory
      </h1>

      <div className="space-y-4">
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