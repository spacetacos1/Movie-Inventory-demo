import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-4">
        <Link href="/" className="text-xl font-bold">
          Movie Inventory
        </Link>

        <nav>
          <Link href="/" className="hover:underline">
            Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}