import Navigation from '../../components/Navigation/page'
import CertificatesHeader from '@/components/certificates/CertificatesHeader'
import FeaturedCertificates from '@/components/certificates/FeaturedCertificates'
import CertificateExplorer from '@/components/certificates/CertificateExplorer'

export const metadata = {
  title: 'Certificados | Portifolio Yago',
  description: 'Cursos, formações e certificações de Yago Santana, organizados por área.',
}

export default function CertificatesPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-6 md:px-8">
        <CertificatesHeader />
        <FeaturedCertificates />
        <CertificateExplorer />
      </main>
    </>
  )
}
