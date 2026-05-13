import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-gold-500">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy-900">Page Not Found</h1>
        <p className="mt-2 text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-3 rounded-lg text-sm transition-colors inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
