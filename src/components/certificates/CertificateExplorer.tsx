'use client'

import { useMemo, useState } from 'react'
import { AREAS, certificates, KINDS, type Area, type Certificate, type Kind } from '@/data/certificates'
import CertificateRow from './CertificateRow'

type AreaFilter = Area | 'Todas'
type KindFilter = Kind | 'todos'

export default function CertificateExplorer() {
  const [area, setArea] = useState<AreaFilter>('Todas')
  const [kind, setKind] = useState<KindFilter>('todos')
  const [query, setQuery] = useState('')
  const [skill, setSkill] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return certificates
      .filter((c) => area === 'Todas' || c.area === area)
      .filter((c) => kind === 'todos' || c.kind === kind)
      .filter((c) => !skill || c.skills.includes(skill))
      .filter(
        (c) =>
          !q ||
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          c.skills.some((s) => s.toLowerCase().includes(q)),
      )
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [area, kind, query, skill])

  const byYear = useMemo(() => {
    const groups: Record<string, Certificate[]> = {}
    for (const cert of filtered) {
      const year = cert.date.slice(0, 4)
      if (!groups[year]) groups[year] = []
      groups[year].push(cert)
    }
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
  }, [filtered])

  const areaCounts = useMemo(
    () => Object.fromEntries(AREAS.map((a) => [a, certificates.filter((c) => c.area === a).length])),
    [],
  )

  const hasFilters = area !== 'Todas' || kind !== 'todos' || query !== '' || skill !== null

  function clearFilters() {
    setArea('Todas')
    setKind('todos')
    setQuery('')
    setSkill(null)
  }

  return (
    <section aria-labelledby="history-title" className="flex flex-col gap-8 border-t border-zinc-800 py-14">
      <div className="flex flex-col gap-2">
        <h2 id="history-title" className="text-3xl font-semibold">
          Histórico completo
        </h2>
        <p className="text-sm text-zinc-400">
          Filtre por área ou tipo, busque por tecnologia, ou clique numa competência para ver tudo
          relacionado.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="relative flex-1 md:max-w-sm">
            <span className="sr-only">Buscar certificados</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por curso, instituição ou tecnologia"
              className="h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900/60 pl-9 pr-3 text-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            />
          </label>

          <div role="group" aria-label="Tipo de certificado" className="flex rounded-lg border border-zinc-800 bg-zinc-900/60 p-1">
            {(['todos', ...Object.keys(KINDS)] as KindFilter[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                aria-pressed={kind === k}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  kind === k ? 'bg-purple text-zinc-50' : 'text-zinc-400 hover:text-zinc-50'
                }`}
              >
                {k === 'todos' ? 'Todos' : KINDS[k as Kind]}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Área" className="flex flex-wrap gap-2">
          {(['Todas', ...AREAS] as AreaFilter[]).map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setArea(a)}
              aria-pressed={area === a}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                area === a ? 'border-purple bg-purple text-zinc-50' : 'border-zinc-700 hover:border-violet-400'
              }`}
            >
              {a}
              <span className={`text-xs tabular-nums ${area === a ? 'text-violet-200' : 'text-zinc-500'}`}>
                {a === 'Todas' ? certificates.length : areaCounts[a]}
              </span>
            </button>
          ))}
        </div>

        <div className="flex min-h-[1.5rem] flex-wrap items-center gap-3 text-sm" aria-live="polite">
          <span className="text-zinc-400">
            {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
          </span>
          {skill && (
            <button
              type="button"
              onClick={() => setSkill(null)}
              className="inline-flex items-center gap-1 rounded-md bg-purple px-2 py-0.5 text-xs text-zinc-50"
            >
              {skill}
              <span aria-hidden="true">×</span>
              <span className="sr-only">remover filtro de competência</span>
            </button>
          )}
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="text-xs underline underline-offset-4 hover:text-violet-300">
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {byYear.length === 0 ? (
        <p className="rounded-xl border border-dashed border-zinc-800 p-10 text-center text-zinc-400">
          Nenhum certificado encontrado com esses filtros.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {byYear.map(([year, certs]) => (
            <section key={year} aria-labelledby={`year-${year}`} className="grid gap-4 md:grid-cols-[8rem_1fr] md:gap-8">
              <header className="flex items-baseline gap-3 md:sticky md:top-6 md:flex-col md:gap-1 md:self-start">
                <h3 id={`year-${year}`} className="text-4xl font-semibold tabular-nums">
                  {year}
                </h3>
                <p className="text-xs tabular-nums text-zinc-400">
                  {certs.length} {certs.length === 1 ? 'item' : 'itens'} · {certs.reduce((s, c) => s + c.hours, 0)}h
                </p>
              </header>
              <ul className="border-t border-violet-400/60">
                {certs.map((cert) => (
                  <CertificateRow
                    key={cert.id}
                    certificate={cert}
                    activeSkill={skill}
                    onSkillClick={(s) => setSkill((current) => (current === s ? null : s))}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}
