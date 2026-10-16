
// Header halaman gaya sorelle: latar terang + blob pastel + aksen biru.
export default function PageHeader({ kicker, title, accent, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pb-10 pt-14 md:pb-14 md:pt-24">
      <div className="absolute left-[-60px] top-0 h-[260px] w-[260px] rounded-full bg-blue-200 opacity-30 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-60px] top-10 h-[220px] w-[220px] rounded-full bg-purple-200 opacity-30 blur-3xl" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4">
        <div>
          {kicker && (
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600">
              {kicker}
            </span>
          )}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            {title} {accent && <span className="text-blue-600">{accent}</span>}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-gray-600">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
