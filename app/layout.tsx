import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dhruvasnayak',
  description: 'Web-Dev ML DA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
