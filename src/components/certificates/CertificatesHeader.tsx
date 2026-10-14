import { AREAS, certificates } from '@/data/certificates'

export default function CertificatesHeader() {
  const totalHours = certificates.reduce((sum, c) => sum + c.hours, 0)
  const issuers = new Set(certificates.map((c) => c.issuer.split(' · ')[0])).size
  const official = certificates.filter((c) => c.kind === 'oficial').length

  const byArea = AREAS.map((area) => ({
    area,
    hours: certificates.filter((c) => c.area === area).reduce((s, c) => s + c.hours, 0),
  })).filter((a) => a.hours > 0)
  const maxHours = Math.max(...byArea.map((a) => a.hours))

  const stats = [
    { label: 'certificados', value: certificates.length },
    { label: 'horas de estudo', value: totalHours },
    { label: 'instituições', value: issuers },
    { label: 'certificações oficiais', value: official },
  ]

  return (
    <header className="grid gap-12 border-b border-zinc-800 pb-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <div className="flex flex-col gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
          Formação contínua
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05]">
          O que eu estudei, <span className="text-zinc-500">e por quê.</span>
        </h1>
        <p className="max-w-lg leading-relaxed text-zinc-400">
          Em vez de uma parede de certificados, organizei tudo por área e por tipo. Certificações
          oficiais e formações longas vêm primeiro; cursos rápidos ficam no histórico.
        </p>
        <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs text-zinc-400">{stat.label}</dt>
              <dd className="order-1 text-4xl font-semibold tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section aria-labelledby="hours-by-area" className="flex flex-col justify-end gap-4">
        <h2 id="hours-by-area" className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Horas por área
        </h2>
        <ul className="flex flex-col gap-3">
          {byArea.map(({ area, hours }) => (
            <li key={area} className="grid grid-cols-[7.5rem_1fr_3rem] items-center gap-3 text-sm">
              <span>{area}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-zinc-800" aria-hidden="true">
                <span
                  className="block h-full rounded-full bg-violet-400"
                  style={{ width: `${(hours / maxHours) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums text-zinc-400">{hours}h</span>
            </li>
          ))}
        </ul>
      </section>
    </header>
  )
}
