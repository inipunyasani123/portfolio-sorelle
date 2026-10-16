// components/Footer.js
import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* CTA */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 text-white">Let’s create something memorable together.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-white px-7 font-semibold text-blue-700 transition hover:bg-blue-50">
            Start a project →
          </Link>
        </div>

        {/* Columns */}
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-gray-900">{profile.name}<span className="text-blue-600">.</span></p>
            <p className="mt-3 max-w-xs text-sm text-gray-600">{profile.role} based in {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-block py-1.5 text-sm font-semibold text-blue-600 hover:underline">{profile.email}</a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Navigation</p>
            <ul className="mt-2">
              {nav.map((l) => (
                <li key={l.href}><Link href={l.href} className="inline-block py-1.5 text-sm text-gray-600 transition hover:text-blue-600">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">About this site</p>
            <p className="mt-3 max-w-xs text-sm text-gray-600">A portfolio template with a fictional persona. Every project links to a live demo site; there are no real clients or testimonials here.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
