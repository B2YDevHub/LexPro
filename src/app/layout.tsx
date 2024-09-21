import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

import "./globals.css"
import { Header } from '@/components/header'
import { TopBar } from '@/components/topBar'
import { NavigationBottom } from '@/components/navigationBottom'
import { Footer } from '@/components/footer'

// Font configurations
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${poppins.variable}`}>
      <body className='antialiased pointer-events-auto mr-none font-sans flex flex-col overflow-x-hidden min-w-full'>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Toaster richColors />
        <NavigationBottom />
        <Footer />
      </body>
    </html>
  )
}