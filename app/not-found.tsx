import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-y container-wide text-center">
      <div className="max-w-md mx-auto">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-50 text-accent mx-auto mb-6">
          <Search className="h-10 w-10" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-display font-bold text-secondary-700">
          Page not found
        </h1>
        <p className="mt-3 text-secondary-400 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try browsing our products or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-semibold shadow-glow hover:bg-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-200 text-secondary-700 px-6 py-3 font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
