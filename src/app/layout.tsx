import type { Metadata } from 'next'
import './globals.css'
import SchemaMarkup from './schema'

export const metadata: Metadata = {
  title: 'Gianni Carducci | AI Product Development & Implementation',
  description: 'Explore ProfitTracker and Gianni Carducci’s work in AI-assisted product development, software deployment, and user training. Based in Los Angeles; English, Spanish, and Italian.',
  keywords: 'product manager, project manager, digital product management, AI product development, agile project management, digital transformation',
  openGraph: {
    title: 'Gianni Carducci | AI Product Development & Implementation',
    description: 'Independent product builder with experience in software deployment and user training. Creator of ProfitTracker.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gianni Carducci | AI Product Development & Implementation',
    description: 'Independent product builder with experience in software deployment and user training. Creator of ProfitTracker.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.giannicarducci.com" />
      </head>
      <body>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  )
}
