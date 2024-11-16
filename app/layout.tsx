import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local";
import Footer from "./components/footer"
import Particles from "./components/particles"
import BlurFade from "./components/blur-fade"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from "./components/nav"

export const metadata: Metadata = {
  title: {
    default: 'Md. Zeeshan',
    template: '%s | Z3SH4N',
  },
  description: 'This is Md. Zeeshan\'s portfolio.',
  openGraph: {
    title: 'Md. Zeeshan Porfolio',
    description: 'This is Md. Zeeshan\'s portfolio.',
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
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${geistSans.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased">
          <main className="relative mx-auto mt-6 max-w-xl px-6 ">
            <div>
            <NavBar />
            <BlurFade inView>
            {children}
            </BlurFade>
            <Footer />
            <SpeedInsights/>
            </div>
          </main>
        <Particles className="-z-10 absolute inset-0 hidden sm:block"></Particles>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,110,198,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      </body>
    </html>
  )
}
