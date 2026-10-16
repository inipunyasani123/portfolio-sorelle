'use client';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { projects, stats } from '@/lib/data';

export default function RecentWork() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dekorasi abstrak */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Judul dan statistik */}
        <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gray-300 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center tracking-tight leading-snug">
              <span className="text-gray-900">My</span>
              <span className="text-blue-600 ml-2">recent work.</span>
            </h2>
          </div>

          {/* Statistik (dihitung dari isi situs) */}
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm text-gray-600 w-full md:w-auto">
            {stats.map((s) => (
              <div key={s.label} className="border-b border-gray-200 pb-2 md:border-0 md:pb-0">
                <dt className="sr-only">{s.label}</dt>
                <dd><span className="font-semibold text-gray-900">{s.value}</span> {s.label.toLowerCase()}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Grid proyek */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-60 object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-14">
                  <span className="text-white text-xl font-semibold">{project.title}</span>
                  <span className="bg-white text-blue-600 rounded-full p-1 ml-2" aria-hidden="true">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Tombol semua proyek */}
        <Reveal delay={0.3} className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 whitespace-nowrap"
          >
            View all projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
