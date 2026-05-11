import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vipan Kaur - Full Stack MERN Developer',
  description: 'Premium portfolio of Vipan Kaur, a passionate Full Stack MERN Developer specializing in creating modern, scalable web applications.',
  keywords: 'MERN, Full Stack Developer, React, Next.js, Web Development, Portfolio',
  authors: [{ name: 'Vipan Kaur' }],
  openGraph: {
    title: 'Vipan Kaur - Full Stack MERN Developer',
    description: 'Premium portfolio showcasing MERN stack expertise',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        <div className="blur-bg" />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
