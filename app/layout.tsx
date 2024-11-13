import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "./components/nav"
import Footer from "./components/footer"
import Particles from "./components/particles"
import BlurFade from "./components/blur-fade"
import "./globals.css"
import NavBar2 from "./components/nav2"

export const metadata: Metadata = {
  title: {
    default: 'Z3SH4N Porfolio',
    template: '%s | Z3SH4N',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Z3SH4N Porfolio',
    description: 'This is my portfolio.',
    siteName: 'Z3SH4N',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <BlurFade>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <NavBar2 />
          {children}
          <Footer />
        </main>
      </BlurFade>
          <Particles className="-z-10 absolute inset-0 hidden sm:block"></Particles>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,110,198,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      </body>
    </html>
  )
}