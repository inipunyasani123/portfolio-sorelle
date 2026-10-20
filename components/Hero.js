'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { profile, projects } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-32 md:pb-32 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" aria-hidden="true" />

      {/* Bentuk abstrak */}
      <div className="animate-blob absolute top-10 left-[-50px] w-[300px] h-[300px] bg-blue-200 opacity-30 rounded-full blur-3xl z-0" />
      <div className="animate-blob-slow absolute bottom-[-80px] right-[-60px] w-[240px] h-[240px] bg-purple-200 opacity-30 rounded-full blur-2xl z-0" />
      <div className="animate-blob absolute top-[40%] left-[60%] w-[180px] h-[180px] bg-pink-200 opacity-20 rounded-full blur-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 [animation-delay:3s]" />

      {/* Konten utama */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Kiri: teks */}
        <div className="hero-rise w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Warm websites that tell the <span className="text-blue-600">whole</span> story.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">{profile.bioShort}</p>

          {/* CTA + tumpukan proyek */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center px-6 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition"
            >
              <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
              Start a project
            </Link>

            <Link href="/work" className="group flex min-h-12 items-center gap-3">
              <span className="flex -space-x-3" aria-hidden="true">
                {projects.slice(0, 4).map((p) => (
                  <span key={p.slug} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-100 shadow-sm">
                    <Image src={p.image} alt="" fill sizes="40px" className="object-cover object-top" />
                  </span>
                ))}
              </span>
              <span className="text-sm text-gray-600 group-hover:text-blue-600">{projects.length} live projects to open</span>
            </Link>
          </div>
        </div>

        {/* Kanan: potret ilustrasi */}
        <div className="hero-rise hero-rise-late w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={profile.avatar}
            alt={profile.avatarAlt}
            width={560}
            height={700}
            priority fetchPriority="high"
            sizes="(max-width: 768px) 90vw, 512px"
            className="aspect-[4/3] rounded-2xl shadow-2xl object-cover object-[50%_30%] w-full max-w-sm sm:aspect-auto md:max-w-md lg:max-w-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
