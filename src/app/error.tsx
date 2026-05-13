"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-red-500">!</p>
        <h1 className="mt-4 text-3xl font-bold text-navy-900">Something Went Wrong</h1>
        <p className="mt-2 text-gray-600">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-2 border-navy-900 text-navy-900 font-bold px-6 py-3 rounded-lg text-sm transition-colors hover:bg-navy-900 hover:text-white"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
