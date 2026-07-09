import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-wide py-24 md:py-32 text-center flex flex-col items-center">
      <span className="font-display text-7xl md:text-8xl font-semibold text-primary-200">404</span>
      <h1 className="mt-4 text-2xl md:text-3xl font-display font-semibold text-secondary-700">
        This page took a wrong turn
      </h1>
      <p className="mt-3 text-secondary-400 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try heading back home
        or browsing our full product catalogue.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-600 transition-colors"
        >
          <Home className="h-4 w-4" /> Back to Home
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-secondary-200 text-secondary-700 px-6 py-3 font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          <Search className="h-4 w-4" /> Browse Products
        </Link>
      </div>
    </div>
  );
}
