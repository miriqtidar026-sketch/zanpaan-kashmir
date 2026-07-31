import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-8xl font-bold text-black">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-gray-600">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Back to Home
        </Link>

        <Link
          href="/packages"
          className="rounded-full border border-black px-6 py-3 transition hover:bg-gray-100"
        >
          Explore Packages
        </Link>
      </div>
    </main>
  );
}