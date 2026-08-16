import { client } from "@/sanity/lib/client";
import { movieBySlugQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MoviePage({ params }: Props) {
  const { slug } = await params;

  const movie = await client.fetch(movieBySlugQuery, { slug });

  if (!movie) {
    return (
      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Movie not found
        </h1>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        {movie.title}
      </h1>

      <p className="mt-2 text-gray-600">
        Directed by {movie.director}
      </p>
    </main>
  );
}