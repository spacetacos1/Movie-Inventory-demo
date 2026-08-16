import Image from "next/image";
import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Image
        src={movie.poster}
        alt={`Poster for ${movie.title}`}
        width={300}
        height={450}
        className="h-auto w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">{movie.title}</h2>

        <p className="text-gray-600">
          Directed by {movie.director}
        </p>

        <p className="mt-2">
          <strong>Rating:</strong> {movie.rating}
        </p>

        <p>
          <strong>Budget:</strong> ${movie.budget.toLocaleString()}
        </p>

        <p>
          <strong>Release:</strong> {movie.releaseDate}
        </p>

        <p className="mt-4">
          {movie.description}
        </p>
      </div>
    </div>
  );
}