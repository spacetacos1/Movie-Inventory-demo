export default function Loading() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="h-[450px] animate-pulse rounded-lg bg-gray-200" />

        <div>
          <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200" />

          <div className="mt-4 h-6 w-1/2 animate-pulse rounded bg-gray-200" />

          <div className="mt-8 space-y-3">
            <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="mt-8">
            <div className="h-7 w-40 animate-pulse rounded bg-gray-200" />
            <div className="mt-3 h-24 w-full animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </main>
  );
}