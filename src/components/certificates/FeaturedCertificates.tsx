import { certificates, formatMonth, KINDS } from '@/data/certificates'
import ArrowUpRight from './ArrowUpRight'

export default function FeaturedCertificates() {
  const featured = certificates.filter((c) => c.featured).slice(0, 3)

  if (featured.length === 0) return null

  return (
    <section aria-labelledby="featured-title" className="flex flex-col gap-8 py-14">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="featured-title" className="text-3xl font-semibold">
          Destaques
        </h2>
        <p className="text-sm text-zinc-400">Os mais relevantes para o meu trabalho hoje</p>
      </div>

      <ol className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">
        {featured.map((cert, index) => (
          <li key={cert.id} className="flex flex-col gap-6 bg-dark-gray p-6 md:p-8">
            <div className="flex items-center justify-between text-xs">
              <span className="text-2xl font-semibold tabular-nums text-violet-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="rounded-full border border-zinc-700 px-2.5 py-1 text-zinc-400">
                {KINDS[cert.kind]}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium leading-snug">{cert.title}</h3>
              <p className="text-sm text-zinc-400">
                {cert.issuer} · {formatMonth(cert.date)} · {cert.hours}h
              </p>
            </div>

            {cert.note && (
              <p className="border-l-2 border-violet-400 pl-4 leading-snug text-zinc-300">{cert.note}</p>
            )}

            <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
              <ul className="flex flex-wrap gap-1.5" aria-label="Competências">
                {cert.skills.map((skill) => (
                  <li key={skill} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs">
                    {skill}
                  </li>
                ))}
              </ul>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:text-violet-300 hover:underline"
                >
                  Verificar
                  <ArrowUpRight />
                  <span className="sr-only">{`credencial de ${cert.title}`}</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
