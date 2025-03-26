import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RFP Tracking Tool',
  description: 'A tool for tracking and managing RFPs',
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
