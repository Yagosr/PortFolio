export const AREAS = [
  'Front-end',
  'Back-end',
  'Dados',
  'Cloud & DevOps',
  'Design & UX',
  'Carreira',
] as const

export type Area = (typeof AREAS)[number]

export const KINDS = {
  oficial: 'Certificação oficial',
  formacao: 'Formação',
  curso: 'Curso',
} as const

export type Kind = keyof typeof KINDS

export type Certificate = {
  id: string
  title: string
  issuer: string
  area: Area
  kind: Kind
  /** Formato AAAA-MM */
  date: string
  hours: number
  skills: string[]
  credentialUrl?: string
  /** Aparece na seção de destaques (recomendado: no máximo 3) */
  featured?: boolean
  /** Uma frase sobre o que você construiu ou aprendeu de verdade */
  note?: string
}

// Exemplos: substitua pelos seus cursos e certificados reais.
export const certificates: Certificate[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    area: 'Cloud & DevOps',
    kind: 'oficial',
    date: '2025-08',
    hours: 40,
    skills: ['AWS', 'IAM', 'EC2', 'S3'],
    credentialUrl: 'https://aws.amazon.com/verification',
    featured: true,
    note: 'Prova proctored. Base para migrar meus projetos pessoais para a nuvem.',
  },
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    area: 'Dados',
    kind: 'formacao',
    date: '2025-04',
    hours: 180,
    skills: ['SQL', 'Tableau', 'R', 'Planilhas'],
    credentialUrl: 'https://coursera.org/verify',
    featured: true,
    note: '8 cursos e um estudo de caso final analisando dados reais de mobilidade urbana.',
  },
  {
    id: 'react-formacao',
    title: 'Formação React com Next.js',
    issuer: 'Rocketseat',
    area: 'Front-end',
    kind: 'formacao',
    date: '2025-01',
    hours: 120,
    skills: ['React', 'Next.js', 'TypeScript'],
    credentialUrl: 'https://app.rocketseat.com.br',
    featured: true,
    note: 'Construí 4 aplicações completas, incluindo um e-commerce com Server Components.',
  },
  {
    id: 'typescript-avancado',
    title: 'TypeScript: tipos avançados e generics',
    issuer: 'Alura',
    area: 'Front-end',
    kind: 'curso',
    date: '2025-06',
    hours: 12,
    skills: ['TypeScript'],
    credentialUrl: 'https://cursos.alura.com.br',
  },
  {
    id: 'docker-fundamentos',
    title: 'Docker: criando e gerenciando containers',
    issuer: 'Alura',
    area: 'Cloud & DevOps',
    kind: 'curso',
    date: '2025-07',
    hours: 10,
    skills: ['Docker', 'Linux'],
    credentialUrl: 'https://cursos.alura.com.br',
  },
  {
    id: 'node-api',
    title: 'APIs REST com Node.js e Fastify',
    issuer: 'Rocketseat',
    area: 'Back-end',
    kind: 'curso',
    date: '2025-03',
    hours: 24,
    skills: ['Node.js', 'Fastify', 'PostgreSQL'],
    credentialUrl: 'https://app.rocketseat.com.br',
  },
  {
    id: 'sql-postgres',
    title: 'SQL com PostgreSQL: consultas e modelagem',
    issuer: 'Alura',
    area: 'Dados',
    kind: 'curso',
    date: '2024-11',
    hours: 16,
    skills: ['SQL', 'PostgreSQL'],
    credentialUrl: 'https://cursos.alura.com.br',
  },
  {
    id: 'python-dados',
    title: 'Python para Análise de Dados',
    issuer: 'DIO',
    area: 'Dados',
    kind: 'formacao',
    date: '2024-09',
    hours: 60,
    skills: ['Python', 'Pandas', 'Matplotlib'],
    credentialUrl: 'https://dio.me',
  },
  {
    id: 'ux-fundamentos',
    title: 'Fundamentos de UX Design',
    issuer: 'Google · Coursera',
    area: 'Design & UX',
    kind: 'curso',
    date: '2024-08',
    hours: 22,
    skills: ['Pesquisa', 'Wireframes', 'Figma'],
    credentialUrl: 'https://coursera.org/verify',
  },
  {
    id: 'git-github',
    title: 'Git e GitHub: controle de versão na prática',
    issuer: 'Alura',
    area: 'Cloud & DevOps',
    kind: 'curso',
    date: '2024-03',
    hours: 8,
    skills: ['Git', 'GitHub Actions'],
    credentialUrl: 'https://cursos.alura.com.br',
  },
  {
    id: 'html-css',
    title: 'HTML, CSS e acessibilidade web',
    issuer: 'Fundação Bradesco',
    area: 'Front-end',
    kind: 'curso',
    date: '2024-02',
    hours: 15,
    skills: ['HTML', 'CSS', 'Acessibilidade'],
  },
  {
    id: 'javascript-logica',
    title: 'Lógica de programação com JavaScript',
    issuer: 'DIO',
    area: 'Front-end',
    kind: 'curso',
    date: '2023-11',
    hours: 20,
    skills: ['JavaScript'],
    credentialUrl: 'https://dio.me',
  },
  {
    id: 'scrum-foundation',
    title: 'Scrum Foundation Professional Certificate',
    issuer: 'CertiProf',
    area: 'Carreira',
    kind: 'oficial',
    date: '2023-10',
    hours: 16,
    skills: ['Scrum', 'Agile'],
    credentialUrl: 'https://certiprof.com',
  },
  {
    id: 'ingles-tecnico',
    title: 'Inglês técnico para TI',
    issuer: 'FIAP',
    area: 'Carreira',
    kind: 'curso',
    date: '2023-07',
    hours: 30,
    skills: ['Inglês'],
  },
]

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

export function formatMonth(date: string) {
  const [year, month] = date.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}
