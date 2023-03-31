import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

import Header from '../components/@ui/Header'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next 13',
  description: 'Next 13 example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
