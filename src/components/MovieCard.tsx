"use client";
import Image from "next/image";
import type { Movie } from "@/types/movie";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onEdit: () => void;
};

export default function MovieCard({ movie, menuOpen, onMenuToggle, onEdit}: MovieCardProps) {
  
  return (
    <div className="relative rounded-lg border">
      <Link href={`/movies/${movie.slug}`}>
        <div>
          <Image
            src={movie.poster}
            alt={`Poster for ${movie.title}`}
            width={300}
            height={450}
            className="h-auto w-full object-cover"
          />

          <div className="px-4 pt-4 pb-0">
            <h2 className="text-2xl font-bold">
              {movie.title}
            </h2>

            <p className="mt-1">
              {movie.rating} • {new Date(movie.releaseDate).getFullYear()}
            </p>

          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-2 px-4 pb-2">
        <p className="text-gray-600">
          Directed by {movie.director}
        </p>
        <div className="relative shrink-0">
          <button
            type="button"
            aria-label={`Actions for ${movie.title}`}
            onClick={onMenuToggle}
            className="rounded-md px-3 py-1 text-xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
          ...
          </button>
          {menuOpen && (
          <div className="absolute top-full left-0 z-10 mb-2 w-40 rounded-md border bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900">
            <button type="button"
              onClick={onEdit}
              className="block w-full rounded-md px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800">
                Edit Movie
            </button>

            <button type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                Delete movie
              </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}