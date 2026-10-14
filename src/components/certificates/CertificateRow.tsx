import { formatMonth, KINDS, type Certificate } from '@/data/certificates'
import ArrowUpRight from './ArrowUpRight'

type CertificateRowProps = {
  certificate: Certificate
  activeSkill: string | null
  onSkillClick: (skill: string) => void
}

export default function CertificateRow({ certificate, activeSkill, onSkillClick }: CertificateRowProps) {
  const { title, issuer, area, kind, date, hours, skills, credentialUrl } = certificate

  return (
    <li className="grid gap-3 border-b border-zinc-800 py-5 md:grid-cols-[5.5rem_1fr_auto] md:items-start md:gap-6">
      <span className="text-sm tabular-nums text-zinc-400 md:pt-0.5">{formatMonth(date)}</span>

      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="font-medium leading-snug">{title}</h4>
          {kind !== 'curso' && (
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                kind === 'oficial' ? 'bg-purple text-zinc-50' : 'border border-zinc-700 text-zinc-300'
              }`}
            >
              {KINDS[kind]}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-400">
          {issuer} · {area}
        </p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Competências">
          {skills.map((skill) => (
            <li key={skill}>
              <button
                type="button"
                onClick={() => onSkillClick(skill)}
                aria-pressed={activeSkill === skill}
                className={`rounded-md border px-2 py-0.5 text-xs transition-colors ${
                  activeSkill === skill
                    ? 'border-purple bg-purple text-zinc-50'
                    : 'border-zinc-700 text-zinc-300 hover:border-violet-400'
                }`}
              >
                {skill}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4 text-sm md:flex-col md:items-end md:gap-2">
        <span className="tabular-nums text-zinc-400">{hours}h</span>
        {credentialUrl ? (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:text-violet-300 hover:underline"
          >
            Credencial
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span className="sr-only">{`de ${title}`}</span>
          </a>
        ) : (
          <span className="text-xs text-zinc-500">Sem link público</span>
        )}
      </div>
    </li>
  )
}
