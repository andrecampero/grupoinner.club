import type { Metadata } from 'next'

import './globals.scss'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export const metadata: Metadata = {
  title: 'Innerclub softworks co',
  description: 'Innerclub softworks co',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      <Header />
      <main className='pt-20'>
        { children }
      </main>
      <Footer />
    </body>
  </html>
}
