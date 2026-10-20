import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'About', description: "About Sorelle, a fictional UI/UX designer and developer: warm, honest websites for families, learners, and makers, and how they get built.", path: '/about' });

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A bit about" accent="me." subtitle={profile.bioShort} />

      {/* Bio + photo */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl md:mx-0">
              <Image src={profile.about} alt={profile.aboutAlt} fill sizes="(max-width:768px) 100vw, 384px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600">{profile.role}</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Designing with <span className="text-blue-600">heart</span>.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get in touch <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Skills &amp; <span className="text-blue-600">Tools</span></h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience + Education */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Experience</h2></Reveal>
          <div className="mt-10">
            {experience.map((e, i) => (
              <Reveal key={e.period} delay={i * 0.08}>
                <div className="grid gap-2 border-t border-gray-200 py-7 md:grid-cols-[180px_1fr]">
                  <span className="text-sm font-semibold text-blue-600">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{e.role} <span className="font-normal text-gray-500">· {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl text-gray-600">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14"><h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Education</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-gray-50 p-6">
                  <span className="text-xs font-semibold text-blue-600">{e.period}</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{e.degree}</h3>
                  <p className="text-sm text-gray-600">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
