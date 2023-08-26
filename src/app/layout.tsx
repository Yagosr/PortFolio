import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifolio Yago',
  description: 'Portifolio profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body  style={{backgroundColor:"black", color:'white'}}>{children}</body> 
    </html>
  )
}
