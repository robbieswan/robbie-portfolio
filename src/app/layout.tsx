import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Robbie Swanson — ML Engineer & Product Leader',
  description: 'ML engineer turned Senior Product Leader. 5+ years shipping AI-native consumer products at the intersection of machine learning, product strategy, and design.',
  openGraph: {
    title: 'Robbie Swanson — ML Engineer & Product Leader',
    description: 'Building AI-native products that actually matter.',
    url: 'https://robbieswanson.com',
    siteName: 'Robbie Swanson',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robbie Swanson — ML Engineer & Product Leader',
    description: 'Building AI-native products that actually matter.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  )
}
