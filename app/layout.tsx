'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[Checkout Presença]',
  description: 'Modulo 04',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// <div className="flex justify-center items-center h-screen">
// </div>
