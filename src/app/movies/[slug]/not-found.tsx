//What happens when a movie is not found
export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Movie not found
      </h1>

      <p className="mt-2 text-gray-600">
        The movie you're looking for doesn't exist.
      </p>
    </main>
  );
}