"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-2 text-gray-600">
        We couldn't load this movie.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg border px-4 py-2 hover:bg-gray-100 active:bg-gray-200"
      >
        Try again
      </button>
    </main>
  );
}