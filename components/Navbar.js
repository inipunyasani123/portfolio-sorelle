'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const links = nav.slice(0, -1); // tanpa Contact (jadi tombol)

  // Esc menutup menu ponsel; pindah halaman juga menutupnya.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <nav aria-label="Main" className="container mx-auto flex items-center justify-between px-4 py-2 md:py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Sorelle<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`text-sm font-medium transition-colors ${isActive(l.href) ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Contact
          </Link>
        </div>

        <button type="button" className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-gray-900 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open} aria-controls="menu-ponsel">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="menu-ponsel" className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${isActive(l.href) ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
