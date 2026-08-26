import Image from "next/image";
import type { Movie } from "@/types/movie";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.slug}`}>
      <div className="overflow-hidden rounded-lg border">
        <Image
          src={movie.poster}
          alt={`Poster for ${movie.title}`}
          width={300}
          height={450}
          className="h-auto w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold">
            {movie.title}
          </h2>

          <p className="mt-2">
            {movie.rating} • {new Date(movie.releaseDate).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
}