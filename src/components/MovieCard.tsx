type Movie = {
  title: string;
  year: number;
  genre: string;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-xl font-bold">{movie.title}</h2>

      <p className="text-gray-600">
        {movie.year} · {movie.genre}
      </p>
    </div>
  );
}