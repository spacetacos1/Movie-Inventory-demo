import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-4xl font-bold">
        Movie Inventory
      </h1>

      <div className="space-y-4">
        <MovieCard
          movie={{
            title: "The Matrix",
            year: 1999,
            genre: "Science Fiction",
          }}
        />

        <MovieCard
          movie={{
            title: "Jurassic Park",
            year: 1993,
            genre: "Adventure",
          }}
        />
      </div>
    </main>
  );
}