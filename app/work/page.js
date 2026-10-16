'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', ...new Set(projects.map((p) => p.category))];
const MotionLink = motion.create(Link);

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const reduce = useReducedMotion();
  const count = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length);
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected" accent="projects." subtitle="Six live projects for families, learners, and makers. Each card opens a case study and a link to the live site." />

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition ${cat === c ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}
              >
                {c} <span className="text-xs opacity-80">{count(c)}</span>
              </button>
            ))}
          </div>

          <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
          <motion.div layout={!reduce} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((p) => (
                <MotionLink
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: reduce ? 0 : 0.3 }}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{p.title}</h2>
                      <span className="text-xs text-gray-500">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  </div>
                </MotionLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
