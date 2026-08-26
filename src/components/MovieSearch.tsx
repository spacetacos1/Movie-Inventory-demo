"use client";

import { useState } from "react";
import type { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

type MovieSearchProps = {
  movies: Movie[];
};

export default function MovieSearch({ movies }: MovieSearchProps) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mb-6 w-full rounded-lg border p-3"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.length > 0 ? ( //Did the user type something?
        filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        )) //Did you find what the user typed?
        ) : ( //If not, do the following
            <p className="text-gray-600">
                No movies found.
            </p>
        )}
      </div>
    </div>
  );
}