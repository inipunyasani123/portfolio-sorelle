'use client';
// Dulunya logo merek sungguhan; kini untuk siapa proyek-proyek demo ini dibuat (persona fiktif).
import Link from 'next/link';
import Reveal from './ui/Reveal';
import { projects } from '@/lib/data';

export default function Brands() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Dekorasi blur latar */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4">
        <Reveal className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Made for families, learners, and <span className="text-purple-700">makers</span>.
            </h2>
            <p className="text-base text-gray-600 mb-4">
              No borrowed logos — these are the six demo products on this site: a neighbourhood guide, a learning game, a furniture shop, and a few pages for events.
            </p>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center text-sm text-purple-700 hover:text-purple-900 font-medium underline underline-offset-4 transition"
            >
              See every project →
            </Link>
          </div>

          {/* Daftar nama proyek */}
          <ul className="grid grid-cols-2 gap-x-12 gap-y-6 md:gap-x-16"
          >
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="text-xl font-bold text-gray-700 transition hover:text-purple-700">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
